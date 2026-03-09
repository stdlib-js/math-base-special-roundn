# CHANGELOG

> Package changelog.

<section class="release" id="v0.2.3">

## 0.2.3 (2026-02-08)

<section class="issues">

### Closed Issues

This release closes the following issue:

[#6005](https://github.com/stdlib-js/stdlib/issues/6005)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`220f055`](https://github.com/stdlib-js/stdlib/commit/220f05572a13425bd7b49efbf6102eef8975d9c1) - **chore:** replace manual `for` loop in examples [(#6491)](https://github.com/stdlib-js/stdlib/pull/6491) _(by Harsh Yadav)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`6c34fb7`](https://github.com/stdlib-js/stdlib/commit/6c34fb73a0fc81142c09c1002c2e2c64e21dd018) - **bench:** update random value generation [(#6414)](https://github.com/stdlib-js/stdlib/pull/6414) _(by Harsh Yadav)_
-   [`8959b08`](https://github.com/stdlib-js/stdlib/commit/8959b0832d8a7d7f9ed8f56b43b7866af72554bd) - **chore:** fix C lint errors [(#6194)](https://github.com/stdlib-js/stdlib/pull/6194) _(by Jay Soni)_
-   [`0e887d5`](https://github.com/stdlib-js/stdlib/commit/0e887d567344c8a31a382266389022ec26f2bcca) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`6bbf2d6`](https://github.com/stdlib-js/stdlib/commit/6bbf2d67034e056190594bf2bceca4eb40a66b6f) - **style:** fix indentation _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Harsh Yadav
-   Jay Soni
-   Karan Anand
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="bug-fixes">

### Bug Fixes

-   [`e7ebe20`](https://github.com/stdlib-js/stdlib/commit/e7ebe201dea1be826f89b997538638b07f26a960) - update implementation to use correct constants

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`ca18359`](https://github.com/stdlib-js/stdlib/commit/ca18359c4b18000828a214bc52a32db7ac6c1121) - **refactor:** update to use stdlib `pow` [(#2539)](https://github.com/stdlib-js/stdlib/pull/2539) _(by Gunj Joshi)_
-   [`e7ebe20`](https://github.com/stdlib-js/stdlib/commit/e7ebe201dea1be826f89b997538638b07f26a960) - **fix:** update implementation to use correct constants _(by Athan Reines)_
-   [`8871f28`](https://github.com/stdlib-js/stdlib/commit/8871f285d013565cd5fc115d73029bbf013f636d) - **refactor:** use stdlib round implementation _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`215dfe6`](https://github.com/stdlib-js/stdlib/commit/215dfe690670731f044d09c92832081bc99372cc) - **docs:** update links _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774) - remove out argument support in croundn and add C implementations [(#1009)](https://github.com/stdlib-js/stdlib/pull/1009)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774): remove support for `out` argument

    -   To migrate, users should provide a complex number object and handle a complex number object return value.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`c244466`](https://github.com/stdlib-js/stdlib/commit/c2444664e2c668563b5842d066a74148b1d2ff76) - **chore:** update package meta data [(#1093)](https://github.com/stdlib-js/stdlib/pull/1093) _(by stdlib-bot, Athan Reines)_
-   [`33b55e6`](https://github.com/stdlib-js/stdlib/commit/33b55e66e1ce8720ed5fcb9e8885fa56de010774) - **feat:** remove out argument support in croundn and add C implementations [(#1009)](https://github.com/stdlib-js/stdlib/pull/1009) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`a37ebe2`](https://github.com/stdlib-js/stdlib/commit/a37ebe2b277b2b54f00377b8582d309c65ec33ce) - **docs:** remove empty lines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Stephannie Jiménez Gacha

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

