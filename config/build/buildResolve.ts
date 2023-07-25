import webpack from "webpack";

export default function buildResolve(): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
