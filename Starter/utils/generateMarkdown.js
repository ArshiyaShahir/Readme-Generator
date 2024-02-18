// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/ArshiyaShahir/${data.title}
  # $section
-[description](#description)
-[TableofContents](#TableofContents)
-[installation](#installation)
-[usage](#usage)
-[license](#license)
-[contribution](#contribution)
-[test](#test)
-[questions](#questions)
${response.description}
##description:
${response.TableofContents}
##TableofContents:

${response.installation}
##installation:

    ${response.usage}
##usage:

    ${response.license}
##licenses:

    ${response.contribution}
##contribution:

    ${response.test}
##test:

    ${response.questions}
##questions:
`;

}


module.exports = generateMarkdown;
