
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from "globals";


export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,

    {
        rules: {
            "no-unused-vars": "error",
            "no-unused-expressions": "error",
            "prefer-const": "error",
            "no-console": "warn",
            "no-undef": "error"
        },
    },

    {
        languageOptions: {
            globals: {
                ...globals.node,
            }
        }
    },
    {
        ignores: [".env", ".dist", "node-modules"]
    }

);