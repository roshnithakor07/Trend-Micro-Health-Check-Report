if (showCharts[1]) {
    const vDescription = [];
    try {
        const firstImagePath = './images/virusIMage.png';
        const secondImagePath = './images/PA.png';

        let imagePath;

        if (fs.existsSync(firstImagePath)) {
            imagePath = firstImagePath;
        } else {
            imagePath = secondImagePath;
        }

        let vDesTitle = wr1[0].desTitle;
        let vDesImages = wr1[0].desImages;
        let vDes = wr1[0].desDescription;

        if (wr1[0].checkDescriptionAdded) {

            if (vDesTitle.length) {

                vDescription.push(
                    new Paragraph({
                        indent: {
                            left: 350
                        },
                        text: vDesTitle, style: 'common-space'
                    })
                )

            }

            if (vDesImages.length) {
                vDescription.push(
                    new Paragraph({
                        style: 'image-style',
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(imagePath),
                                transformation: {
                                    width: 399.87401575,
                                    height: 233.95275591
                                }
                            })
                        ]
                    }),
                )
            }

            if (vDes.length) {
                vDescription.push(
                    new Paragraph({ text: vDes, style: 'bullet-para' })
                )
            }

        }
    } catch (error) {
        console.log("error - virus des")
    }

    const v_des0 = chartDescriptionFun(0, wr1);
    const v_des1 = chartDescriptionFun(1, wr1);
    const v_des2 = chartDescriptionFun(2, wr1);

    vChart.push(
        new Paragraph({
            text: chartTitle[1] ? chartTitle[1] : "5.2 Virus/Malware",
            heading: HeadingLevel.HEADING_2,
            keepLines: true,
            keepNext: true,
            spacing: {
                before: 220,
                after: 230,
            }
        }),
        new Paragraph({ text: `${wr1[0].chartFirstLine}`, style: "common-space" }),
        new Paragraph({
            style: 'image-style',
            children: [
                new ImageRun({
                    data: fs.readFileSync(`${chartFolderName}/wr_img1.png`),
                    transformation: transformation
                })
            ]
        }),
        ...v_des0,
        new Paragraph({
            style: 'image-style',
            children: [
                new ImageRun({
                    data: fs.readFileSync(`${chartFolderName}/wr_img2.png`),
                    transformation: transformation
                })
            ]
        }),
        ...v_des1,

        new Paragraph({
            style: 'image-style',
            children: [
                new ImageRun({
                    data: fs.readFileSync(`${chartFolderName}/wr_img3.png`),
                    transformation: transformation
                })
            ]
        }),
        ...v_des2,

        ...vDescription
    )

};