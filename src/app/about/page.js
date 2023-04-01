import React from 'react'

//while the file's name is page.js, we still 
//rename the function and export to About since 
//all pages in nextjs13 are names with page.js
const About = () => {
  return (
    <>
      <div className="max-w-6xl max-auto space-y-4 p-4">
        <h1 className="text-2xl font-medium text-amber-600">about page</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there  anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

        </p>
        <h2>heading 2</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

        </p>
      </div>
    </>
  )
}

export default About