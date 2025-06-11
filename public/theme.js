;(() => {
  try {
    const theme = localStorage.getItem('theme')
    // const prefersDark = window.matchMedia(
    //   '(prefers-color-scheme: dark)',
    // ).matches

    // ignore the prefersDark check for now to default to dark mode
    const prefersDark = true

    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  } catch (_) {}
})()
