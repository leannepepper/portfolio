import * as THREE from 'three'
import {
  color,
  float,
  floor,
  length,
  mix,
  mod,
  smoothstep,
  texture,
  uv,
  vec2,
  vec3
} from 'three/tsl'
import { MeshStandardNodeMaterial } from 'three/webgpu'
import { GRID_SIZE, selectedTexture, gridColsUniform } from './constants.js'

/** Create Mesh with Honeycomb Grid and Lights */
const material = new MeshStandardNodeMaterial()
material.toneMapped = false

const shapeColor = color('#19191f')
const black = color('#000000')

const uvVar = uv()
const gridCols = float(gridColsUniform)
const gridRows = float(GRID_SIZE)

const st = vec2(uvVar.x.mul(gridCols), uvVar.y.mul(gridRows))

const rowIndex = floor(st.y)
const parity = mod(rowIndex, float(2.0))
const colIndex = floor(st.x.sub(parity.mul(0.5)))

const centerX = colIndex.add(parity.mul(0.5)).add(0.5)
const centerY = rowIndex.add(0.5)
const centerCell = vec2(centerX, centerY)

const diff = st.sub(centerCell)
const dist = length(diff)

const circleMask = smoothstep(0.0, 0.05, float(0.44).sub(dist))

const u = colIndex.add(0.5).div(gridCols)
const v = rowIndex.add(0.5).div(gridRows)

const texSampleData = texture(selectedTexture, vec2(u, v))

const isSelected = texSampleData.a // use alpha channel to store selected state
const texColor = texSampleData.rgb

const baseColor = mix(black, shapeColor, circleMask)
const selectedColor = mix(baseColor, texColor, isSelected)
const finalColor = mix(baseColor, selectedColor, circleMask)

material.outputNode = finalColor
material.emissiveNode = finalColor

const geometry = new THREE.PlaneGeometry(2, 2)
export const LightBrightMesh = new THREE.Mesh(geometry, material)
LightBrightMesh.position.set(0.0, 0.0, 0.0)
