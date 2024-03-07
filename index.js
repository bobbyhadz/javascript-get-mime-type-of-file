console.log('bobbyhadz.com');

const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', event => {
  const files = event.target.files;

  for (const file of files) {
    console.log(`filename: ${file.name}`);
    console.log(`file size: ${file.size} bytes`);
    console.log(`file type: ${file.type}`);

    const mimeType = file.type;
    console.log(mimeType);
  }
});
