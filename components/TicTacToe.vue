<template>
  <table class="table is-bordered">
    <tbody>
      <tr>
        <td
          class="cell"
          :class="{ disable: isClicked('1') }"
          @click="onCell('1')"
        >
          {{ cells['1'] }}
        </td>
        <td
          class="cell"
          :class="{ disable: isClicked('2') }"
          @click="onCell('2')"
        >
          {{ cells['2'] }}
        </td>
        <td
          class="cell"
          :class="{ disable: isClicked('3') }"
          @click="onCell('3')"
        >
          {{ cells['3'] }}
        </td>
      </tr>
      <tr>
        <td
          class="cell"
          :class="{ disable: isClicked('4') }"
          @click="onCell('4')"
        >
          {{ cells['4'] }}
        </td>
        <td
          class="cell"
          :class="{ disable: isClicked('5') }"
          @click="onCell('5')"
        >
          {{ cells['5'] }}
        </td>
        <td
          class="cell"
          :class="{ disable: isClicked('6') }"
          @click="onCell('6')"
        >
          {{ cells['6'] }}
        </td>
      </tr>
      <tr>
        <td
          class="cell"
          :class="{ disable: isClicked('7') }"
          @click="onCell('7')"
        >
          {{ cells['7'] }}
        </td>
        <td
          class="cell"
          :class="{ disable: isClicked('8') }"
          @click="onCell('8')"
        >
          {{ cells['8'] }}
        </td>
        <td
          class="cell"
          :class="{ disable: isClicked('9') }"
          @click="onCell('9')"
        >
          {{ cells['9'] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      cells: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      },
      winConditions: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9], // rows
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9], // columns
        [1, 5, 9],
        [3, 5, 7] // diagonals
      ],
      cellType: ['X', 'O'],
      playing: false,
      turn: true,
      winner: ''
    }
  },
  computed: {
    wichTurn() {
      return this.cellType[this.turn ? 0 : 1]
    }
  },
  watch: {
    turn() {
      this.playing = true
      this.$emit('running', true)
    },
    winner() {
      this.playing = false
    }
  },
  methods: {
    isClicked(idCell) {
      return this.cells[idCell] !== ''
    },
    onCell(cell) {
      if (this.cells[cell] !== '') {
        return
      }
      this.cells[cell] = this.wichTurn
      this.changeTurn()
    },
    changeTurn() {
      if (this.checkForWin()) {
        this.winner = this.wichTurn
        this.$emit('win', this.winner)
        return
      }
      this.turn = !this.turn
    },
    checkForWin() {
      for (let i = 0; i < this.winConditions.length; i++) {
        const wc = this.winConditions[i]
        const cells = this.cells
        if (this.areEqual(cells[wc[0]], cells[wc[1]], cells[wc[2]])) {
          return true
        }
      }
      return false
    },
    areEqual() {
      for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === '' || arguments[i] !== arguments[i - 1])
          return false
      }
      return true
    }
  }
}
</script>

<style scoped>
.cell {
  cursor: pointer;
  width: 5em;
  height: 5em;
  font-size: 2em;
  line-height: 4em;
  text-align: center;
}
tr:hover {
  background-color: inherit;
}
.cell:hover {
  background-color: #fafafa;
}
.cell.disable {
  background-color: #fafafa;
  cursor: inherit;
}
</style>
