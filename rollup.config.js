import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
process.env.BABEL_ENV = 'production'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),                                       // peerDependencies로 설치한 라이브러리들을 external 모듈로 설정 즉, 번들링된 결과에 포함시키지 않음
    resolve({ extensions }),                  // node_modules 에서 모듈을 불러올 수 있게 해줌. ts/tsx 파일도 불러올 수 있게 해줌
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ["**/__tests__/**", "test.tsx"],
      clean: true
    }),
    commonjs({                                // CommonJS 형태로 만들어진 모듈도 불러와서 사용 할 수 있게 해줌.
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    })
  ]
};
