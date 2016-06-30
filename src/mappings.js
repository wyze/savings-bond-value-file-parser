const toNumber = value => Number(value) || 0
const toMoney = value => value.trim().length ? toNumber(value) / 100 : null

export default [
  {
    key: 'series',
    position: {
      start: 0,
      end: 1,
    },
  },
  {
    key: 'redemptionYear',
    position: {
      start: 1,
      end: 5,
    },
    transform: toNumber,
  },
  {
    key: 'redemptionMonth',
    position: {
      start: 5,
      end: 7,
    },
  },
  {
    key: 'issueYear',
    position: {
      start: 7,
      end: 11,
    },
    transform: toNumber,
  },
  {
    key: 'issueJanValue',
    position: {
      start: 11,
      end: 17,
    },
    transform: toMoney,
  },
  {
    key: 'issueFebValue',
    position: {
      start: 17,
      end: 23,
    },
    transform: toMoney,
  },
  {
    key: 'issueMarValue',
    position: {
      start: 23,
      end: 29,
    },
    transform: toMoney,
  },
  {
    key: 'issueAprValue',
    position: {
      start: 29,
      end: 35,
    },
    transform: toMoney,
  },
  {
    key: 'issueMayValue',
    position: {
      start: 35,
      end: 41,
    },
    transform: toMoney,
  },
  {
    key: 'issueJunValue',
    position: {
      start: 41,
      end: 47,
    },
    transform: toMoney,
  },
  {
    key: 'issueJulValue',
    position: {
      start: 47,
      end: 53,
    },
    transform: toMoney,
  },
  {
    key: 'issueAugValue',
    position: {
      start: 53,
      end: 59,
    },
    transform: toMoney,
  },
  {
    key: 'issueSepValue',
    position: {
      start: 59,
      end: 65,
    },
    transform: toMoney,
  },
  {
    key: 'issueOctValue',
    position: {
      start: 65,
      end: 71,
    },
    transform: toMoney,
  },
  {
    key: 'issueNovValue',
    position: {
      start: 71,
      end: 77,
    },
    transform: toMoney,
  },
  {
    key: 'issueDecValue',
    position: {
      start: 77,
      end: 83,
    },
    transform: toMoney,
  },
]
