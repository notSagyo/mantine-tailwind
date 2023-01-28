# What's this?

It adds a basic degree of compatibility between Mantine and Tailwind libraries, for example making both's media queries to be the same, or making the libraries' colors available to both and provide type hints for the new/custom colors.

# How do I add this?

Initialize your React project like you normally would and follow the installation guides for Tailwind and Mantine, then:

1. Edit your `tailwind.config.js` file and add everything marked as needed in this project's `tailwind.config.js`

2. Copy the `theme` folder to your project

3. Wrap your app with a MantineProvider, and add the theme override:

```tsx
import themeOverride from './theme/theme'; // OR your path to the file

<MantineProvider
  theme={{
    ...themeOverride,
    // ...OTHER THEME SETTINGS
  }}
  // ...OTHER PROVIDER SETTINGS
>
  {YOUR_APP}
</MantineProvider>;
```

- OPTIONAL: Add the `styles/globals.css` to you project. (It's just Tailwind's default file without @tailwind/base)

If you want to use another path for the theme file (ie. `src/theme`), you only need to update the `tailwind.config.js` require to that new path (ie. the new require would point to `src/theme/tailwind-shared`)

The needed code from `tailwind.config.js` is: a require for `tailwind-shared`, a helper function, and everything inside the `theme` object

# Usage

## Share values between libraries

Doing the steps above already fix some inconsistencies between the libraries. But you can add/modify anything to be shared:

1. Add it to the `tailwind-shared.js` file
2. Use it on `theme.ts` as you need it, and do the same on `tailwind.config.js`

Now you will get consistent type hints both for Mantine and Tailwind

If you need some complex typings you can't do with `@type`, you can redefine the property for your `.ts` files on `tailwind-shared-typed.ts`. Example provided

## Add / Modify values only for Mantine / Tailwind

**NO NEW BEHAVIOR.**

### Mantine

If you want to add new values just do it normally on your MantineProvider, or in the `theme.ts` override if you want to keep everything in one place

### Tailwind

If you want to add new values, just do it normally on the `tailwind.config.js`

# Odd interactions

In some cases (like border-radius), you'll get normal behavior on Mantine props, but when using the adjusted classes on Tailwind, you'll notice that, `radius-xl` is bigger than `radius-2xl`, this is because Mantine radius uses a different scale that goes up to `xl`

Also you may notice you have for example a new class `p-sm` (Mantine's `sm`) which is equivalent to Tailwinds `p-3`

Still I preferred to keep all Tailwind classes despite these unintuitive behaviors because of how replacing the utilities instead of extending them can cause some loss in functionalities