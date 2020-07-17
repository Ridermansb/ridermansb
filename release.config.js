module.exports = {
    branches: ['master'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/exec',
            {
                prepareCmd: 'sh ./build.sh v${nextRelease.version}',
            },
        ],
        [
            '@semantic-release/github',
            {
                assets: [
                    {
                        path: './lib.zip',
                        name: 'lib-v${nextRelease.version}.zip',
                        label: 'Distribution files.zip',
                    },
                ],
            },
        ],
        "@semantic-release/npm",
    ],
};
