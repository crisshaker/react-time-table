const INITIAL_STATE = [
  {
    code: "CSIT123",
    period: {
      venue: "JQB18",
      time: "730"
    }
  },
  {
    code: "CSIT562",
    period: {
      venue: "JQB23",
      time: "730"
    }
  },
  {
    code: "CSIT123",
    period: {
      venue: "NNB2",
      time: "1230"
    }
  },
  {
    code: "CSIT202",
    period: null
  }
];

export default (state = INITIAL_STATE, action) => INITIAL_STATE;
