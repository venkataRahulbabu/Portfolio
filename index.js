// If the node_modules folder was already part of the Git repository before you added the .gitignore file, it might not be removed immediately.
// The .gitignore file only prevents new changes in the node_modules directory from being tracked, but it doesn't remove files that are already part of the repository.

// git rm -r --cached node_modules
// git commit -m "Remove node_modules from version control"
// git push origin main

                                                    // (OR)

// Caching: Sometimes, Git might cache the files, and the changes may not be reflected immediately. To clear the Git cache and apply the changes, you can use the following commands:

// git rm -r --cached .
// git add .
// git commit -m "Update .gitignore"
// git push origin main

