module.exports = {
  rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
  },
  randFace() {
    return ["corona", "ancla", "corazones", "picas", "tréboles", "diamantes"]
    [this.rand(0, 5)];
  },
};
