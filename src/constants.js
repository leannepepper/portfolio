import * as THREE from 'three'
import { uniform } from 'three/tsl'

export const GRID_SIZE = 40.0
export const gridColsUniform = uniform(40)
export const colors = {
  orange: '#ff3901',
  cyan: '#0fffff',
  green: '#5cb000',
  pink: '#ff8a85',
  yellow: '#fefc2e',
  red: '#ff9200'
}
export const templateNames = {
  empty: 'empty',
  flower: 'flower'
}

export function buildDataTexture (aspect) {
  const cols = Math.ceil(GRID_SIZE * aspect)
  gridColsUniform.value = cols

  const data = new Uint8Array(cols * GRID_SIZE * 4)
  const tex = new THREE.DataTexture(data, cols, GRID_SIZE, THREE.RGBAFormat)
  tex.minFilter = tex.magFilter = THREE.NearestFilter
  tex.needsUpdate = true
  return tex
}

export let selectedTexture = buildDataTexture(
  window.innerWidth / window.innerHeight
)

export function updateSelectedTexture (aspect) {
  const cols = Math.ceil(GRID_SIZE * aspect)

  gridColsUniform.value = cols
  selectedTexture.image.data = new Uint8Array(cols * GRID_SIZE * 4)
  selectedTexture.image.width = cols
  selectedTexture.image.height = GRID_SIZE

  // force a new texture on the GPU, not a great solution, this will clear the texture.
  selectedTexture.dispose()
  selectedTexture.needsUpdate = true
}

export const flowerTemplateData = [
  [1, 10],
  [1, 11],
  [2, 10],
  [2, 11],
  [2, 12],
  [3, 12],
  [3, 11],
  [3, 10],
  [3, 9],
  [4, 9],
  [4, 10],
  [4, 11],
  [4, 12],
  [4, 13],
  [5, 12],
  [5, 11],
  [5, 10],
  [5, 9],
  [6, 10],
  [6, 11],
  [6, 12],
  [7, 11],
  [7, 10],
  [7, 12],
  [8, 13],
  [8, 12],
  [8, 11],
  [9, 10],
  [9, 11],
  [9, 12],
  [10, 12],
  [10, 11],
  [9, 13],
  [10, 13],
  [10, 10],
  [11, 10],
  [9, 9],
  [8, 10],
  [11, 11],
  [11, 12],
  [6, 13],
  [7, 13],
  [8, 14],
  [5, 13],
  [6, 14],
  [7, 14],
  [8, 15],
  [4, 14],
  [5, 14],
  [6, 15],
  [7, 15],
  [8, 16],
  [7, 16],
  [6, 16],
  [5, 15],
  [4, 15],
  [4, 16],
  [5, 16],
  [6, 17],
  [5, 17],
  [4, 17],
  [12, 12],
  [12, 13],
  [12, 11],
  [13, 10],
  [13, 11],
  [13, 12],
  [13, 13],
  [14, 14],
  [14, 13],
  [14, 12],
  [14, 11],
  [14, 10],
  [15, 13],
  [15, 12],
  [15, 11],
  [15, 10],
  [16, 11],
  [16, 12],
  [16, 13],
  [17, 12],
  [17, 11],
  [7, 9],
  [8, 9],
  [9, 8],
  [9, 7],
  [8, 8],
  [7, 8],
  [6, 9],
  [5, 8],
  [6, 8],
  [7, 7],
  [7, 6],
  [8, 7],
  [8, 6],
  [9, 6],
  [6, 7],
  [5, 7],
  [5, 6],
  [6, 6],
  [7, 5],
  [5, 5],
  [6, 5],
  [11, 13],
  [10, 14],
  [9, 14],
  [9, 15],
  [10, 15],
  [11, 14],
  [12, 14],
  [13, 14],
  [12, 15],
  [11, 15],
  [11, 16],
  [10, 16],
  [9, 16],
  [10, 17],
  [12, 16],
  [13, 15],
  [13, 16],
  [12, 17],
  [11, 17],
  [12, 18],
  [13, 17],
  [10, 9],
  [11, 9],
  [12, 10],
  [13, 9],
  [12, 9],
  [12, 8],
  [11, 8],
  [10, 8],
  [10, 7],
  [11, 7],
  [13, 8],
  [14, 8],
  [14, 9],
  [12, 7],
  [11, 6],
  [12, 6],
  [13, 6],
  [14, 7],
  [13, 7],
  [14, 6],
  [13, 5],
  [6, 18],
  [6, 19],
  [5, 19],
  [4, 20],
  [3, 20],
  [2, 21],
  [2, 22],
  [1, 22],
  [1, 23],
  [1, 24],
  [2, 25],
  [2, 26],
  [3, 26],
  [4, 27],
  [1, 26],
  [1, 27],
  [1, 28],
  [1, 29],
  [1, 30],
  [5, 27],
  [6, 28],
  [7, 28],
  [8, 29],
  [17, 8],
  [18, 8],
  [19, 7],
  [20, 7],
  [21, 7],
  [22, 8],
  [23, 8],
  [24, 9],
  [25, 9],
  [26, 10],
  [27, 10],
  [27, 11],
  [27, 12],
  [27, 13],
  [27, 14],
  [28, 15],
  [29, 15],
  [30, 16],
  [31, 15],
  [31, 14],
  [31, 13],
  [30, 13],
  [26, 9],
  [26, 8],
  [27, 7],
  [28, 7],
  [29, 6],
  [30, 6],
  [31, 6],
  [32, 7],
  [32, 8],
  [32, 9],
  [33, 9],
  [34, 10],
  [35, 10],
  [36, 11],
  [37, 10],
  [31, 5],
  [30, 7],
  [29, 5],
  [30, 5],
  [1, 31],
  [1, 32],
  [1, 33],
  [1, 34],
  [1, 35],
  [1, 36],
  [1, 51],
  [1, 47],
  [1, 46],
  [1, 45],
  [1, 44],
  [1, 52],
  [1, 53],
  [1, 54],
  [1, 55],
  [1, 56],
  [1, 57],
  [1, 58],
  [1, 59],
  [6, 69],
  [37, 9],
  [37, 8],
  [37, 7],
  [36, 7],
  [35, 7],
  [27, 54],
  [35, 59],
  [35, 58],
  [34, 59],
  [34, 58],
  [34, 60],
  [33, 57],
  [33, 58],
  [33, 59],
  [33, 60],
  [32, 60],
  [32, 59],
  [32, 58],
  [31, 58],
  [31, 59],
  [30, 59],
  [30, 58],
  [29, 58],
  [29, 59],
  [30, 60],
  [28, 59],
  [28, 60],
  [31, 60],
  [34, 57],
  [35, 57],
  [36, 59],
  [36, 58],
  [29, 57],
  [27, 57],
  [28, 58],
  [28, 57],
  [29, 56],
  [29, 55],
  [28, 56],
  [27, 56],
  [26, 57],
  [26, 56],
  [27, 55],
  [28, 55],
  [26, 55],
  [30, 61],
  [29, 60],
  [30, 57],
  [31, 57],
  [30, 62],
  [29, 61],
  [28, 61],
  [28, 62],
  [29, 62],
  [30, 63],
  [27, 61],
  [27, 62],
  [28, 63],
  [29, 63],
  [28, 64],
  [27, 63],
  [32, 61],
  [31, 61],
  [34, 61],
  [33, 61],
  [32, 62],
  [31, 62],
  [34, 62],
  [33, 62],
  [32, 63],
  [33, 63],
  [34, 63],
  [27, 60],
  [27, 59],
  [27, 58],
  [26, 58],
  [26, 59],
  [26, 60],
  [26, 61],
  [25, 60],
  [25, 59],
  [25, 58],
  [24, 60],
  [24, 59],
  [32, 57],
  [31, 56],
  [30, 56],
  [30, 55],
  [31, 55],
  [32, 56],
  [33, 56],
  [33, 55],
  [32, 55],
  [31, 54],
  [33, 54],
  [32, 54],
  [28, 38],
  [28, 39],
  [27, 39],
  [27, 38],
  [27, 37],
  [26, 37],
  [26, 38],
  [26, 39],
  [26, 40],
  [25, 40],
  [25, 39],
  [25, 38],
  [25, 37],
  [25, 36],
  [24, 37],
  [24, 38],
  [24, 39],
  [24, 40],
  [23, 39],
  [23, 38],
  [23, 37],
  [22, 38],
  [22, 39],
  [21, 39],
  [21, 38],
  [20, 39],
  [20, 38],
  [19, 38],
  [19, 39],
  [20, 40],
  [22, 40],
  [21, 40],
  [18, 40],
  [18, 39],
  [20, 37],
  [21, 37],
  [20, 41],
  [19, 40],
  [19, 37],
  [18, 38],
  [20, 42],
  [19, 41],
  [18, 41],
  [18, 42],
  [19, 42],
  [20, 43],
  [17, 41],
  [17, 42],
  [18, 43],
  [18, 44],
  [19, 43],
  [20, 44],
  [16, 42],
  [16, 43],
  [17, 43],
  [19, 44],
  [18, 45],
  [17, 44],
  [16, 44],
  [16, 45],
  [17, 45],
  [19, 36],
  [18, 37],
  [17, 37],
  [16, 37],
  [17, 36],
  [18, 36],
  [19, 35],
  [19, 34],
  [18, 34],
  [18, 35],
  [17, 34],
  [17, 35],
  [16, 36],
  [15, 36],
  [15, 35],
  [16, 35],
  [17, 33],
  [16, 34],
  [15, 34],
  [16, 33],
  [15, 33],
  [17, 38],
  [16, 38],
  [15, 37],
  [17, 39],
  [17, 40],
  [16, 41],
  [16, 40],
  [16, 39],
  [15, 38],
  [15, 39],
  [15, 40],
  [15, 41],
  [14, 41],
  [14, 40],
  [14, 39],
  [14, 38],
  [13, 38],
  [13, 39],
  [13, 40],
  [12, 40],
  [12, 39],
  [23, 40],
  [24, 41],
  [25, 41],
  [25, 42],
  [25, 43],
  [25, 44],
  [21, 41],
  [21, 42],
  [21, 43],
  [21, 44],
  [22, 45],
  [23, 45],
  [25, 45],
  [24, 46],
  [24, 45],
  [24, 44],
  [24, 43],
  [24, 42],
  [23, 41],
  [22, 41],
  [22, 42],
  [22, 43],
  [22, 44],
  [23, 44],
  [23, 43],
  [23, 42],
  [22, 37],
  [23, 36],
  [24, 36],
  [24, 35],
  [24, 34],
  [24, 33],
  [20, 36],
  [20, 35],
  [20, 34],
  [21, 33],
  [22, 33],
  [23, 32],
  [21, 36],
  [22, 36],
  [21, 35],
  [21, 34],
  [22, 34],
  [22, 35],
  [23, 34],
  [23, 35],
  [23, 33],
  [8, 30],
  [8, 31],
  [8, 32],
  [10, 33],
  [11, 33],
  [12, 34],
  [12, 35],
  [12, 36],
  [12, 37],
  [13, 37],
  [9, 32],
  [20, 45],
  [20, 46],
  [20, 47],
  [21, 48],
  [22, 49],
  [23, 49],
  [24, 50],
  [25, 51],
  [25, 52],
  [25, 53],
  [25, 54],
  [25, 55],
  [29, 64],
  [30, 65],
  [30, 66],
  [30, 67],
  [31, 68],
  [32, 69],
  [30, 68],
  [33, 69],
  [20, 48],
  [25, 50],
  [2, 37],
  [3, 37],
  [3, 38],
  [3, 39],
  [3, 40],
  [4, 41],
  [4, 42],
  [4, 43],
  [3, 43],
  [2, 44],
  [2, 48],
  [3, 48],
  [3, 49],
  [3, 50],
  [2, 51],
  [2, 60],
  [3, 60],
  [3, 61],
  [3, 62],
  [3, 63],
  [4, 64],
  [5, 64],
  [6, 65],
  [6, 66],
  [6, 67],
  [6, 68],
  [5, 69],
  [4, 70],
  [3, 69],
  [3, 68],
  [4, 68],
  [16, 9],
  [15, 9],
  [7, 27],
  [8, 28],
  [7, 29],
  [6, 29],
  [4, 50],
  [4, 51],
  [3, 51],
  [2, 50],
  [23, 50],
  [22, 51],
  [21, 51],
  [20, 52],
  [19, 52],
  [19, 53],
  [19, 55],
  [19, 54],
  [19, 56],
  [19, 57],
  [19, 58],
  [19, 59],
  [17, 61],
  [16, 62],
  [15, 62],
  [14, 62],
  [13, 61],
  [13, 60],
  [13, 59],
  [14, 59],
  [15, 58],
  [19, 60],
  [18, 61],
  [17, 62],
  [16, 63],
  [15, 61],
  [16, 61]
]
