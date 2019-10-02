const ignoredExtensions = ['.test.js', '.test.ts']

const ignoreTheTests = () => {
  const files = Array.from(document.getElementsByClassName('file-header'))

  // Map over each file
  files.map((file, i) => {
    // Get the file name
    const fileInfo = Array.from(file.children).find(element =>
      element.className.includes('file-info')
    )
    const fileName = Array.from(fileInfo.children).find(
      element => element.tagName === 'A'
    ).text

    const shouldIgnoreFile = ignoredExtensions.some(ext =>
      fileName.endsWith(ext)
    )

    if (shouldIgnoreFile) {
      // Get the input
      const fileActions = Array.from(file.children).find(element =>
        element.className.includes('file-actions')
      )
      const form = fileActions.children[0].children[0].children[0]
      const input = Array.from(form.children).find(
        element => element.tagName === 'LABEL'
      ).children[0]

      // Click the input to mark it as Viewed
      // with a small delay, so we don't make Octocat mad
      setTimeout(() => input.click(), 100 * i)
    }
  })
}

ignoreTheTests()
