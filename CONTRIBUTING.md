# Contributing to UCD CS Tutoring Repositories

This document will serve as a set of universal guidelines for contributing to
projects in the UC-Davis-CS-Tutoring organization. Before writing code for any
of these repositories, please be sure to read this document (and any
CONTRIBUTING.md files in the respective repository) fully.

Questions about these guidelines should be directed by email to
masotoudeh@ucdavis.edu or the listed maintainer of the repository in question.

## Basic Workflow
The process for making a change to any repository should follow these steps:

1. File an issue explaining the change you wish to make
2. Start a branch (or fork) for the change in question
3. Modify that branch to contain a working, final version of the change
4. Submit a pull request and wait for a maintainer to improve or approve your
   changes

These steps are described in more detail below.

## Issues
Any discussion that may result in a change to the repository should take place
within an Issue on the respective repository. Be sure to search for existing
issues before posting a new one. Issues should (when applicable) describe:

* The change you are proposing to make
* The issue that change would address (why do you want to make the change)
* The timeframe you intend to complete the change by
* The name of the branch (or fork) in which you intend to make these changes

All discussions regarding the change should be made on that issue.

## Branches
Issues resulting in code changes should have a dedicated branch where all
proposed changes will be commited. Branch names should be descriptive, and
referenced in the issue. If you do not have commit access to the repository,
you may fork it and make a branch in your fork.

## Code Modifications
Commits should be atomic and frequent. Commit messages should be detailed and
describe why a change is being made, ideally referencing the respective issue
number. Commits should not break any tests, or if they do, the tests should be
marked "expected fail" and have a comment explaining why it is OK for the test
to fail.

In general, do *not* use ``git add -A``, instead use ``git add -i`` to
interactively pick exactly the changes you wish to include in your commit. This
prevents unintentionally including temporary or sensitive files in your
commits, and allows you to make more atomic, single-change commits.

### Coding Style
Please follow the coding style used in the repository you are contributing to.
Ideally this will be specified in the CONTRIBUTING.md file, although in some
cases you may need to read the existing code to get a feel for the style used.
When starting a new repository, the default coding style should follow the
respective Google Style Guide (unless otherwise explicitly stated in the
CONTRIBUTING.md file).

## Pull Request
Once the branch is ready, please send a pull request to merge your changes into
the master branch. Maintainers should be listed in each repositories
MAINTAINERS.md file.
