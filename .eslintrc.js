module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    ignorePatterns: ['node_modules/'],
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    rules: {
        /**
         * @description 정의되기 전에 사용 ('React' was used before it was defined)
         * @url https://eslint.org/docs/2.0.0/rules/no-use-before-define
         */
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['warn'], // 이거 원래 ['error'] 였음

        /**
         * @description import시에 뒤에 확장자를 생략할지 안할지 (js, jsx, ts, tsx는 ignorePackages에 넣어서 생략할 수 있게함)
         * @url https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
         */
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        /**
         * @description JSX 문법을 쓸 수 있는 확장자인지 (기본: jsx / extension에 포함된 확장자도 JSX 사용가능) (JSX not allowed in files with extension '.tsx')
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
         */
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],

        /**
         * @description console을 쓸수 있는지 없는지
         * @url https://eslint.org/docs/rules/no-console
         */
        'no-console': 'off',

        /**
         * @description Component 표현식 정의 (Function component is not a function declaration)
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
         */
        'react/function-component-definition': ['off'],

        /**
         * @description export module이 한개밖에 없으면 default 사용하는걸 선호 (Prefer default export.)
         * @url https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
         */
        'import/prefer-default-export': 'off',

        /**
         * @description parseInt에서 몇 진수인지 표기
         * @url https://eslint.org/docs/rules/radix
         */
        radix: 'off',

        /**
         * @description 사용하지 않는 변수를 허용하지 않는다.
         * @url https://eslint.org/docs/rules/no-unused-vars
         */
        'no-unused-vars': 'warn',

        /**
         * @description {…props} 형태로 넘기는걸 허용하는지
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
         */
        'react/jsx-props-no-spreading': 'warn',

        /**
         * @description jsx를 사용할 때 import React를 꼭 써라
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
         */
        'react/react-in-jsx-scope': 'warn',

        /**
         * @description 필수 props가 아닌 경우에 defaultProps를 설정해라
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
         */
        'react/require-default-props': 'warn',

        /**
         * @description propTypes에 대해 정확히 명시해라. ts를 대신 이용해도 되지만, 빼먹는 타입이 없도록 하여라.
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
         */
        'react/prop-types': 'warn',

        /**
         * @description 외부 범위에서 선언된 섀도우 변수에서 변수 선언을 허용하지 않습니다.
         * @url https://eslint.org/docs/rules/no-shadow
         */
        'no-shadow': 'warn',

        /**
         * @description onKeyEvent가 기본으로 달려있지 않으면서 접근 가능한 상태의 html tag에 onClick이벤트를 걸어줄 경우, onKeyUp, onKeyDown, onKeyPress 3개중 하나는 꼭 넣어줘라.
         * @url https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
         */
        'jsx-a11y/click-events-have-key-events': 'warn',

        /**
         * @description props, state, context에서 비구조화 할당을 반드시 사용해라
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
         */
        'react/destructuring-assignment': 'warn',

        /**
         * @description 선언되지 않은 변수를 사용할 수 없음
         * @url https://eslint.org/docs/rules/no-undef
         */
        'no-undef': 'warn',

        /**
         * @description 비트연산자 허용하지 않음
         * @url https://eslint.org/docs/rules/no-bitwise
         */
        'no-bitwise': 'warn',

        /**
         * @description 의미없는 html 태그에 role로 의미부여 해라 (ex. div ,span)
         * @url https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
         */
        'jsx-a11y/no-static-element-interactions': 'warn',

        /**
         * @description 함수 사용시 undefined가 return 되지 않게 해라.
         * @url https://eslint.org/docs/rules/consistent-return
         */
        'consistent-return': 'warn',

        /**
         * @description ++, — 쓰지말자. +=, -= 쓰자.
         * @url https://eslint.org/docs/rules/no-plusplus
         */
        'no-plusplus': 'warn',

        /**
         * @description 지정된 구문을 쓰지 말자airbnb에서는 ‘ForInStatement’, ‘ForOfStatement’, ‘LabeledStatement’, ‘WithStatement’ 이렇게 4개가 금지다.
         * @url https://eslint.org/docs/rules/no-restricted-syntax
         */
        'no-restricted-syntax': 'warn',

        /**
         * @description camelCase 사용하자
         * @url https://eslint.org/docs/rules/camelcase
         */
        camelcase: 'warn',

        /**
         * @description default interaction이 없는 html tag에서 interaction을 사용하려거든 role을 붙여라.
         * @url https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
         */
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',

        /**
         * @description 불필요한 Fragment 쓰지 않음
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
         */
        'react/jsx-no-useless-fragment': 'warn',

        /**
         * @description button tag에 type을 꼭 명시해주자
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
         */
        'react/button-has-type': 'warn',

        /**
         * @description 패키지에 선언되지 않은 외부 모듈의 가져오기를 금지 (뭔지 잘 모르겠음)
         * @url https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
         */
        'import/no-extraneous-dependencies': 'warn',

        /**
         * @description React key를 배열의 index값으로 쓰지 말자. 고유의 값을 써주자.
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
         */
        'react/no-array-index-key': 'warn',

        /**
         * @description 중첩된 삼항 연산자를 허용하지 않는다. (무조건 삼항연산자는 한번만, 넘어가면 if else 문이나 switch 사용)
         * @url https://eslint.org/docs/rules/no-nested-ternary
         */
        'no-nested-ternary': 'warn',

        /**
         * @description 함수 매개변수에 재선언을 하지 마라. 상태관리처럼 원본은 냅두고 다른 변수에 할당해서 리턴하던가 해라
         * @url https://eslint.org/docs/2.0.0/rules/no-param-reassign
         */
        'no-param-reassign': 'warn',

        /**
         * @description 불안정한 컴포넌트 안에 컴포넌트를 만들지 마라. 따로 만들던가, 메모이제이션을 잘 사용해줘라. 리렌더링 때문에 성능저하 일어난다.
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
         */
        'react/no-unstable-nested-components': 'warn',

        /**
         * @description 상호작용하는 엘리먼트에 label를 넣는다. checkbox같은곳에 라벨 꼭 넣어주라는 뜻
         * @url https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
         */
        'jsx-a11y/label-has-associated-control': 'warn',

        /**
         * @description >, “, “, } 같은 특수문자들이 태그안에 들어가지 않게 해라 (ex. <div> < </div>  ===> <div> &gt; </div>)
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
         */
        'react/no-unescaped-entities': 'warn',

        /**
         * @description 함수 이름을 써야하는지 아닌지
         * @url https://eslint.org/docs/rules/func-names
         */
        'func-names': 'warn',

        /**
         * @description undefined값이 허용되지 않는 컨텍스트에서 chaining 불가능 (ex. (obj?.foo).bar; ==> 에러 , (obj?.foo ?? bar)(); ==> 에러아님)
         * @url https://eslint.org/docs/rules/no-unsafe-optional-chaining
         */
        'no-unsafe-optional-chaining': 'warn',

        /**
         * @description 지정해놓은 표현식 사용 불가airbnb config => 'no-unused-expressions’: ['error', { allowShortCircuit: false, allowTernary: false }],
         * @url
         */
        'no-unused-expressions': 'warn',

        /**
         * @description 비구조화 할당을 사용하는게 어떤지
         * @url https://eslint.org/docs/rules/prefer-destructuring
         */
        'prefer-destructuring': 'warn',

        /**
         * @description case, default안에서 변수 선언을 되도록 하지말고, 하게되면 중괄호로 묶어주자.
         * @url https://eslint.org/docs/rules/no-case-declarations
         */
        'no-case-declarations': 'warn',

        /**
         * @description useEffect, useCallback 등 종속성을 가지는 Hook에서 누락된 종속성이 있음
         * @url https://ko.reactjs.org/docs/hooks-rules.html
         */
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

        /**
         * @description switch 문에서 default를 사용해라
         * @url https://eslint.org/docs/rules/default-case
         */
        'default-case': 'warn',

        /**
         * @description 빈 블록이 없게해라. (ex. if {} else {} 처럼 안에 내용 없는것 허용안함)
         * @url https://eslint.org/docs/rules/no-empty
         */
        'no-empty': 'warn',

        /**
         * @description alert, confirm, prompt 사용하지 마라
         * @url https://eslint.org/docs/rules/no-alert
         */
        'no-alert': 'warn',

        /**
         * @description Array 생성자를 허용하지 않는다.
         * @url https://eslint.org/docs/rules/no-array-constructor
         */
        'no-array-constructor': 'warn',

        /**
         * @description 특정 전역 변수명을 허용하지 않는다. (ex. const onClick 같은거 하지마라)
         * @url https://eslint.org/docs/rules/no-restricted-globals
         */
        'no-restricted-globals': 'warn',

        /**
         * @description 안쓴 props를 허용하지 않는다. ts의 경우 propTypes 대신 type, interface를 이용해도 된다.
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
         */
        'react/no-unused-prop-types': 'warn',

        /**
         * @description continue를 쓰지말자
         * @url https://eslint.org/docs/rules/no-continue
         */
        'no-continue': 'warn',

        /**
         * @description 배열 메서드를 사용할때 모든 상황에서 리턴을 해주자. 필요없으면 forEach문을 써라.
         * @url https://eslint.org/docs/rules/array-callback-return
         */
        'array-callback-return': 'warn',

        /**
         * @description ===, !== 사용하자
         * @url https://eslint.org/docs/rules/eqeqeq
         */
        eqeqeq: 'warn',

        /**
         * @description 조건에서 상수표현식을 쓰지 말아라 (ex. if (false){ doSomething(); };)
         * @url https://eslint.org/docs/rules/no-constant-condition
         */
        'no-constant-condition': 'warn',

        /**
         * @description autoFoucs를 쓰지 말자
         * @url https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
         */
        'jsx-a11y/no-autofocus': 'warn',

        /**
         * @description for ~ in ~ 반복문에 실제로 key를 포함하는지 if문을 포함해라 (객체 반복하면 프로토타입 체인을 통해 상속되는 속성이 포함되어서, 예상치 못한 버그가 생길 수 있음)
         * @url https://eslint.org/docs/rules/guard-for-in
         */
        'guard-for-in': 'warn',

        /**
         * @description 반복문에서 await를 쓰지 마라. Promise.all 비동기 병렬 처리
         * @url https://eslint.org/docs/rules/no-await-in-loop
         */
        'no-await-in-loop': 'warn',

        /**
         * @description iframe은 unique title이 있어야한다.
         * @url https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
         */
        'jsx-a11y/iframe-has-title': 'warn',

        /**
         * @description 할당 또는 비교 이외의 new 연산자를 허용 하지 않습니다. (뭔지 이해 잘 안됨)
         * @url https://eslint.org/docs/rules/no-new
         */
        'no-new': 'warn',

        /**
         * @description dangerouslySetInnerHTML을 사용하지 말자
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
         */
        'react/no-danger': 'warn',

        /**
         * @description else if 로 묶을수 있는건 최대한 묶어라.
         * @url https://eslint.org/docs/rules/no-lonely-if
         */
        'no-lonely-if': 'warn',

        /**
         * @description pascal case쓰지마라
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
         */
        'react/jsx-pascal-case': 'warn',

        /**
         * @description 기본 매개변수가 마지막 매개변수가 되도록 하라. 그러면 호출할때 마지막거를 생략가능하다.
         * @url https://eslint.org/docs/rules/default-param-last
         */
        'default-param-last': 'warn',

        /**
         * @description tableIndex 속성을 양수로 설정하지 마라.
         * @url https://github.com/reactjs/react-a11y/blob/master/docs/rules/tabindex-no-positive.md
         */
        'jsx-a11y/tabindex-no-positive': 'warn',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
