const simpleGit = require('simple-git');
const git = simpleGit();

(async function () {
    let commitDate = "2025-02-05T12:00:00"; // 5 February 2025
    let commitMessage = "Manual commit on 5th Feb 2025";

    try {
        await git.raw(['commit', '--allow-empty', '--date', commitDate, '-m', commitMessage]);
        console.log(`✅ Commit added on ${commitDate}!`);

        console.log("🚀 Pushing commit...");
        await git.push('origin', 'main');
        console.log("✅ Commit pushed successfully!");
    } catch (error) {
        console.error("❌ Error while committing:", error);
    }
})();
