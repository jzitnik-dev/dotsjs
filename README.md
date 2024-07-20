# Dots

Dots.js is simple "programming language". The entire language uses only 2 characters: `.` and `:`

## Install package

```bash
npm init -g dotsjs
```

## Example hello world in dotsjs

```
::...:: ::.:::: ::.:::. :::..:: ::.:::: ::.::.. ::..:.: :.:::. ::.::.. ::.:::: ::..::: :.:... :...:. :..:... ::..:.: ::.::.. ::.::.. ::.:::: :.::.. :..... :::.::: ::.:::: :::..:. ::.::.. ::..:.. :....: :...:. :.:..: :::.::
```

## How to run .dots file

In the `examples` folders there are some .dots files that you can run. You can run it by cloning this project and then running this:

```bash
dotsjs run script.dots
```

## How to compile JavaScript project to single .dots file.

Dots uses [@vercel/ncc](https://github.com/vercel/ncc) for compiling JavaScript project to a singular file, then compiling the singular file to a .dots file.

```bash
dotsjs compile donut.js
```
