/*
 Fonts
 */
import FontDetector from '../lib/fontDetector.js';

const key = 'Fonts';
const detector = new FontDetector();

function getFonts() {
    return new Promise((resolve, reject) => {
        let result = [];
        const fontArray = ['Abadi MT Condensed Light', 'Adobe Fangsong Std', 'Adobe Hebrew', 'Adobe Ming Std', 'Agency FB', 'Aharoni', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Aparajita', 'Arab', 'Arabic Transparent', 'Arabic Typesetting', 'Arial Baltic', 'Arial Black', 'Arial CE', 'Arial CYR', 'Arial Greek', 'Arial TUR', 'Arial', 'Batang', 'BatangChe', 'Bauhaus 93', 'Bell MT', 'Bitstream Vera Serif', 'Bodoni MT', 'Bookman Old Style', 'Braggadocio', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Calibri Light', 'Calibri', 'Californian FB', 'Cambria Math', 'Cambria', 'Candara', 'Castellar', 'Casual', 'Centaur', 'Century Gothic', 'Chalkduster', 'Colonna MT', 'Comic Sans MS', 'Consolas', 'Constantia', 'Copperplate Gothic Light', 'Corbel', 'Cordia New', 'CordiaUPC', 'Courier New Baltic', 'Courier New CE', 'Courier New CYR', 'Courier New Greek', 'Courier New TUR', 'Courier New', 'DFKai-SB', 'DaunPenh', 'David', 'DejaVu LGC Sans Mono', 'Desdemona', 'DilleniaUPC', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Engravers MT', 'Eras Bold ITC', 'Estrangelo Edessa', 'EucrosiaUPC', 'Euphemia', 'Eurostile', 'FangSong', 'Forte', 'FrankRuehl', 'Franklin Gothic Heavy', 'Franklin Gothic Medium', 'FreesiaUPC', 'French Script MT', 'Gabriola', 'Gautami', 'Georgia', 'Gigi', 'Gisha', 'Goudy Old Style', 'Gulim', 'GulimChe', 'GungSeo', 'Gungsuh', 'GungsuhChe', 'Haettenschweiler', 'Harrington', 'Hei S', 'HeiT', 'Heisei Kaku Gothic', 'Hiragino Sans GB', 'Impact', 'Informal Roman', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'KacstOne', 'KaiTi', 'Kalinga', 'Kartika', 'Khmer UI', 'Kino MT', 'KodchiangUPC', 'Kokila', 'Kozuka Gothic Pr6N', 'Lao UI', 'Latha', 'Leelawadee', 'Levenim MT', 'LilyUPC', 'Lohit Gujarati', 'Loma', 'Lucida Bright', 'Lucida Console', 'Lucida Fax', 'Lucida Sans Unicode', 'MS Gothic', 'MS Mincho', 'MS PGothic', 'MS PMincho', 'MS Reference Sans Serif', 'MS UI Gothic', 'MV Boli', 'Magneto', 'Malgun Gothic', 'Mangal', 'Marlett', 'Matura MT Script Capitals', 'Meiryo UI', 'Meiryo', 'Menlo', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU-ExtB', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'Miriam Fixed', 'Miriam', 'Mongolian Baiti', 'MoolBoran', 'NSimSun', 'Narkisim', 'News Gothic MT', 'Niagara Solid', 'Nyala', 'PMingLiU', 'PMingLiU-ExtB', 'Palace Script MT', 'Palatino Linotype', 'Papyrus', 'Perpetua', 'Plantagenet Cherokee', 'Playbill', 'Prelude Bold', 'Prelude Condensed Bold', 'Prelude Condensed Medium', 'Prelude Medium', 'PreludeCompressedWGL Black', 'PreludeCompressedWGL Bold', 'PreludeCompressedWGL Light', 'PreludeCompressedWGL Medium', 'PreludeCondensedWGL Black', 'PreludeCondensedWGL Bold', 'PreludeCondensedWGL Light', 'PreludeCondensedWGL Medium', 'PreludeWGL Black', 'PreludeWGL Bold', 'PreludeWGL Light', 'PreludeWGL Medium', 'Raavi', 'Rachana', 'Rockwell', 'Rod', 'Sakkal Majalla', 'Sawasdee', 'Script MT Bold', 'Segoe Print', 'Segoe Script', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol', 'Segoe UI', 'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'SimHei', 'SimSun', 'SimSun-ExtB', 'Simplified Arabic Fixed', 'Simplified Arabic', 'Snap ITC', 'Sylfaen', 'Symbol', 'Tahoma', 'Times New Roman Baltic', 'Times New Roman CE', 'Times New Roman CYR', 'Times New Roman Greek', 'Times New Roman TUR', 'Times New Roman', 'TlwgMono', 'Traditional Arabic', 'Trebuchet MS', 'Tunga', 'Tw Cen MT Condensed Extra Bold', 'Ubuntu', 'Umpush', 'Univers', 'Utopia', 'Utsaah', 'Vani', 'Verdana', 'Vijaya', 'Vladimir Script', 'Vrinda', 'Webdings', 'Wide Latin', 'Wingdings'];
        fontArray.forEach(item => {
            if (hasFont(item)) {
                result.push(item);
            }
        })
        resolve(result.join(','));
    })
}

function hasFont(font) {
    return detector.detect(font);
}

export default {
    key,
    getFonts,
    hasFont
};
