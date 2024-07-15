# Summary of the Fourth Session
**Date:** 1403,04,24 - 2024,07,14

## Conventional Commit in Github
**Why should we commit?**: Commit is part of the documentation of a project. And the stronger the documentation, the better the understanding of the code. So we must commit according to the correct principles so that besides ourselves, others can also use our codes. [[Bus Factor](https://en.wikipedia.org/wiki/Bus_factor)]<br>

**The general rule of committing[^1]**:<br>
```bash
<type>[Optional scope]: <description>
[Optional body]
[Optional footer]
```
**feat**: Introduces a new feature.<br>
**fix**: Fix a bug or make a change.<br>
**BREAKING CHABGE**: Making a change that causes another part of the program to not work properly. Changes that cause damage.<br>

> [!IMPORTANT]
> Commits should be written so well that changes can be noticed without reading the code.

[^1]: [ref](https://www.conventionalcommits.org/en/v1.0.0/)