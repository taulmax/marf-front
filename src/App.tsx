/* eslint-disable new-cap */
import React from 'react';
import pptxgen from 'pptxgenjs';
import './App.css';

function App() {
    // 데모 테스트
    const runDemo = () => {
        const pptx = new pptxgen();

        pptx.defineLayout({ name: 'A4', width: 8.3, height: 11.7 });
        pptx.layout = 'A4';

        const slide = pptx.addSlide();
        slide.addText('조명 사양 리스트(공용부)', {
            x: '0%',
            y: 0.3,
            w: '100%',
            h: 0.39,
            fontSize: 20,
            color: '000000',
            align: 'center',
            bold: true,
            fontFace: '맑은 고딕',
        });

        const tabOpts2: pptxgen.TableProps = {
            x: 0.05,
            y: 1,
            w: 8.2,
            h: 0.9,
            fontSize: 9,
            fontFace: '맑은 고딕',
            align: 'center',
            valign: 'middle',
            border: { pt: 1, color: '000000' },
        };
        const arrTabRows2: pptxgen.TableRow[] = [
            [
                { text: '명칭', options: { rowspan: 2, bold: true, fontSize: 11 } },
                { text: '전력', options: { rowspan: 2, bold: true, fontSize: 11 } },
                { text: '등기구', options: { colspan: 3, bold: true, fontSize: 11 } },
                { text: '램프', options: { rowspan: 2, bold: true, fontSize: 11 } },
                { text: '컨버터', options: { rowspan: 2, bold: true, fontSize: 11 } },
            ],
            [
                { text: '업체', options: { bold: true, fontSize: 11 } },
                { text: '인증', options: { bold: true, fontSize: 11 } },
                { text: '인증번호', options: { bold: true, fontSize: 11 } },
            ],
            [
                { text: '“A” P.P' },
                { text: 'LED 40W' },
                { text: '이비테크' },
                { text: '고효율' },
                { text: '제37917호' },
                { text: '서울반도체' },
                { text: '이비테크' },
            ],
        ];
        slide.addTable(arrTabRows2, tabOpts2);

        pptx.writeFile({ fileName: 'react-demo1.pptx' });
    };

    return (
        <div className='App'>
            <button type='button' onClick={runDemo}>
                DEMO TEST
            </button>
        </div>
    );
}

export default App;
