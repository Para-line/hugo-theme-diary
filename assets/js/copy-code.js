// // https://simplernerd.com/hugo-add-copy-to-clipboard-button/
// const svgCopy =
//   '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>';
// const svgCheck =
//   '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>';
// const addCopyButtons = (clipboard) => {
//   // 1. Look for pre > code elements in the DOM
//   document.querySelectorAll(".chroma code").forEach((codeBlock) => {
//     // 2. Create a button that will trigger a copy operation
//     const button = document.createElement("button");
//     button.className = "copy-code-button";
//     button.type = "button";
//     button.title = "Copy to clipboard";
//     button.innerHTML = svgCopy;
//     // 2.5. Remove empty lines
//     // https://stackoverflow.com/a/59137147
//     let toPaste = "";
//     (codeBlock.innerText.split('\n')).forEach((textLine) =>{
//       if (textLine.length > 0) {
//         if (toPaste != "") {
//           toPaste += '\n';
//         }
//         toPaste += textLine;
//       }
//     });
//     button.addEventListener("click", () => {
//       clipboard.writeText(toPaste).then(
//         () => {
//           button.blur();
//           button.innerHTML = svgCheck;
//           setTimeout(() => (button.innerHTML = svgCopy), 2000);
//         },
//         (error) => (button.innerHTML = "Error")
//       );
//     });
//     // 3. Append the button after the pre tag (.highlight > button > pre > code)
//     const pre = codeBlock.parentNode;
//     // pre.parentNode.insertBefore(button, pre);
//     pre.parentNode.insertBefore(button, pre.nextSibling);
//     // 4. Listen to keyboard press
//     // https://stackoverflow.com/a/43288177
//     // https://stackoverflow.com/a/24386518
//     // https://stackoverflow.com/a/4471635
//     const highlight = pre.parentNode;
//     highlight.addEventListener('keydown', function(event) {
//       // console.log(event);
//       if (
//         event.key === " " ||
//         event.key === "Spacebar" ||
//         event.code === "Space" ||
//         event.key === "Enter" ||
//         event.code === "Enter"
//       ) {
//         clipboard.writeText(codeBlock.innerText).then(
//           () => {
//             button.blur();
//             button.innerHTML = svgCheck;
//             setTimeout(() => (button.innerHTML = svgCopy), 2000);
//           },
//           (error) => (button.innerHTML = "Error")
//         );
//       }
//     });
//   });
// };

// if (navigator && navigator.clipboard) {
//   addCopyButtons(navigator.clipboard);
// } else {
//   const script = document.createElement("script");
//   script.src =
//     "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/3.0.3/promise/clipboard-polyfill.promise.min.js";
//   script.integrity = "sha512-O9Q+AhI1w7LT1/tHysPWDwwrgB1fKJ/nXPNLC30i8LF6RdSz4dGZyWB9WySag3DZMdGuK5yHJEdKXMKI2m5uSQ==";
//   script.crossOrigin = "anonymous";
//   script.referrerpolicy = "no-referrer";
//   script.onload = () => addCopyButtons(clipboard);
//   document.body.appendChild(script);
// }

const svgCopy =
  '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>';
const svgCheck =
  '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>';

const addCopyButtons = (clipboard) => {
  // 遍历所有的 div.chroma 元素
  document.querySelectorAll('div.chroma').forEach((chromaDiv) => {
    // 查找 div.chroma 内的所有 pre.chroma 元素
    const preElements = chromaDiv.querySelectorAll('pre.chroma');
    // 确保存在至少两个 pre.chroma 元素
    if (preElements.length >= 2) {
      // 选择第二个 pre.chroma
      const pre = preElements[1];
      const codeBlock = pre.querySelector('code');
      if (codeBlock) {
        // 创建复制按钮
        const button = document.createElement("button");
        button.className = "copy-code-button";
        button.type = "button";
        button.title = "Copy to clipboard";
        button.innerHTML = svgCopy;

        // 移除空行
        let toPaste = "";
        codeBlock.innerText.split('\n').forEach((textLine) => {
          if (textLine.length > 0) {
            if (toPaste !== "") {
              toPaste += '\n';
            }
            toPaste += textLine;
          }
        });

        // 添加点击事件监听器
        button.addEventListener("click", () => {
          clipboard.writeText(toPaste).then(
            () => {
              button.blur();
              button.innerHTML = svgCheck;
              setTimeout(() => (button.innerHTML = svgCopy), 2000);
            },
            (error) => (button.innerHTML = "Error")
          );
        });

        // 在 pre 元素后插入按钮
        pre.parentNode.insertBefore(button, pre.nextSibling);

        // 添加键盘可访问性
        const highlight = pre.parentNode;
        highlight.addEventListener('keydown', function(event) {
          if (
            event.key === " " ||
            event.key === "Spacebar" ||
            event.code === "Space" ||
            event.key === "Enter" ||
            event.code === "Enter"
          ) {
            clipboard.writeText(codeBlock.innerText).then(
              () => {
                button.blur();
                button.innerHTML = svgCheck;
                setTimeout(() => (button.innerHTML = svgCopy), 2000);
              },
              (error) => (button.innerHTML = "Error")
            );
          }
        });
      }
    }
  });
};

if (navigator && navigator.clipboard) {
  addCopyButtons(navigator.clipboard);
} else {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/3.0.3/promise/clipboard-polyfill.promise.min.js";
  script.integrity =
    "sha512-O9Q+AhI1w7LT1/tHysPWDwwrgB1fKJ/nXPNLC30i8LF6RdSz4dGZyWB9WySag3DZMdGuK5yHJEdKXMKI2m5uSQ==";
  script.crossOrigin = "anonymous";
  script.referrerpolicy = "no-referrer";
  script.onload = () => addCopyButtons(clipboard);
  document.body.appendChild(script);
}
