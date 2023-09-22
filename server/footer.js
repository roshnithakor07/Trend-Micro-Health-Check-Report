const docx = require('docx');
const fs = require('fs')

const { AlignmentType, Document, Packer, Paragraph } = docx;


const doc = new Document({
    numbering: {
        config: [
            {
                reference: "my-crazy-numbering",
                levels: [
                    {
                        level: 0,
                        format: "upperRoman",
                        text: "%1",
                        alignment: AlignmentType.START,
                        style: {
                            paragraph: {
                                indent: { left: 720, hanging: 260 },
                            },
                        },
                    },
                    {
                        level: 1,
                        format: "decimal",
                        text: "%2.",
                        alignment: AlignmentType.START,
                        style: {
                            paragraph: {
                                indent: { left: 1440, hanging: 980 },
                            },
                        },
                    },
                    {
                        level: 2,
                        format: "lowerLetter",
                        text: "%3)",
                        alignment: AlignmentType.START,
                        style: {
                            paragraph: {
                                indent: { left: 2160, hanging: 1700 },
                            },
                        },
                    },
                    {
                        level: 3,
                        format: "upperLetter",
                        text: "%4)",
                        alignment: AlignmentType.START,
                        style: {
                            paragraph: {
                                indent: { left: 2880, hanging: 2420 },
                            },
                        },
                    },
                ],
            },
        ],
    },
    sections: [{
        children: [
            new Paragraph({
                text: "Hey you",
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 0,
                },
            }),
            new Paragraph({
                text: "What's up fam",
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Hello World 2",
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Yeah boi",
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 2,
                },
            }),
            new Paragraph({
                text: "Hey you",
                bullet: {
                    level: 0,
                },
            }),
            new Paragraph({
                text: "What's up fam",
                bullet: {
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Hello World 2",
                bullet: {
                    level: 2,
                },
            }),
            new Paragraph({
                text: "Yeah boi",
                bullet: {
                    level: 3,
                },
            }),
            new Paragraph({
                text: "101 MSXFM",
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 3,
                },
            }),
            new Paragraph({
                text: "back to level 1",
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "back to level 0",
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 0,
                },
            }),
        ],
    }]
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("footer.docx", buffer);
});
