import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // build: {
    //     outDir: 'build', // Match CRA build output folder
    // },
    server: {
        open: true
    },
});
