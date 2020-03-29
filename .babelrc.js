module.exports = {
  plugins: [
    "@babel/plugin-proposal-class-properties",
    process.env.NODE_ENV === "prodction" && "babel-plugin-jsx-remove-data-test-id"
  ].filter(a => a),
  presets: ["@babel/preset-env", "@babel/preset-react"]
};
