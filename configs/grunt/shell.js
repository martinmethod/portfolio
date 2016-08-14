module.exports = {
    feature: {
        command: [
            'read -p "Commit message: " msg',
            'FEATURE_BRANCH="$(git rev-parse --abbrev-ref HEAD)"',
            'git checkout dev',
            'git merge --squash ${FEATURE_BRANCH} && git reset',
            'git add . && git commit -m "$msg"',
            'git branch -D ${FEATURE_BRANCH}'
        ].join('&&')
    },

    prepare: {
        command: 'git checkout -b release dev'
    },

    release: {
        command: [
            'git add . && git commit -m "Bump version to <%= pkg.version %>"',
            'git checkout -b staging prod',
            'git merge release',
            'touch CHANGELOG.md',
            'grunt conventionalChangelog',
            'git add CHANGELOG.md && git commit -m "CHANGELOG"',
            'git checkout prod',
            'git merge --no-ff staging -m "Release v<%= pkg.version %>"',
            'grunt bump-commit',
            'git branch -D staging',
            'git checkout dev',
            'git merge --no-ff release -m \'Merge branch "release" into "dev"\'',
            'git push',
            'git branch -D release',
            'grunt concurrent:review'
        ].join('&&')
    }
};