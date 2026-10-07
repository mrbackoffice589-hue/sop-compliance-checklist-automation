/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

 \* DAILY CHECKLIST — VIDEO MEETING COORDINATION

 \* FOOD OPERATIONS UNIT

 \*

 \* MASTER DATABASE 2026

 \* DATABASE ID:

 \* YOUR_DATABASE_SPREADSHEET_ID

 \*

 \* TEMPLATE MASTER:

 \* YOUR_TEMPLATE_DOCUMENT_ID

 \*

 \* TIMEZONE:

 \* Asia/Jakarta

 \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/





/\* ============================================================

   CONFIG

   ============================================================ \*/



const CONFIG = {



  TEMPLATE_ID:

    'YOUR_TEMPLATE_DOCUMENT_ID',



  // DATABASE MASTER — SET YOUR OWN ID IN A PRIVATE/CONTROLLED ENVIRONMENT

  DATABASE_ID:

    'YOUR_DATABASE_SPREADSHEET_ID',



  DATABASE_NAME:

    'DATABASE — CHECKLIST FOOD OPERATIONS UNIT — MASTER 2026',



  SHEET_NAME:

    'Form Responses 1',



  ROOT_FOLDER_NAME:

    'CHECKLIST AUTOMATION',



  FILE_PREFIX:

    'CHECKLIST AUTOMATION',



  TIMEZONE:

    'Asia/Jakarta'

};





/\* ============================================================

   MAPPING PLACEHOLDER → KOLOM DATABASE MASTER BARU

   ============================================================ \*/



const COL = {



  /\* IDENTITAS \*/



  A001: 4,   // Nama SPPG

  A002: 6,   // Pengawas Keuangan

  A003: 5,   // Kepala SPPG

  A004: 7,   // Pengawas Gizi

  A005: 2,   // Tanggal Pemeriksaan

  A006: 8,   // Asisten Lapangan

  A007: 3,   // Jam Mulai Zoom

  A008: 9,   // Chef





  /\* PM \*/



  A009: 10,

  A010: 11,

  A011: 12,

  A012: 13,





  /\* SERTIFIKASI \*/



  A015: 15,

  A016: 16,

  A017: 17,





  /\* AIR \*/



  A018: 18,  // Sumber air minum

  A019: 20,  // Sumber air masak



  A020: 22,  // Tanggal pH air minum

  A021: 23,  // Jam pH air minum



  A022: 25,  // Tanggal pH air masak

  A023: 26,  // Jam pH air masak



  A024: 21,  // Nilai pH air minum

  A025: 24,  // Nilai pH air masak





  /\* KONDISI RUANGAN \*/



  A026: 27,

  A027: 29,

  A028: 31,

  A029: 33,



  A030: 28,

  A031: 30,

  A032: 32,



  /\* A033 = jumlah insect killer,

     diambil berdasarkan HEADER karena

     posisi pertanyaan baru. \*/





  /\* ==========================================================

     BAHAN BAKU

     ========================================================== \*/



  /\* KARBOHIDRAT \*/



  A034: 36,  // Jumlah

  A035: 37,  // Kualitas

  A036: 38,  // Jam penerimaan

  A037: 39,  // Nama penerima

  A038: 40,  // Keterangan





  /\* PROTEIN HEWANI \*/



  A039: 42,

  A040: 43,

  A041: 44,

  A042: 45,

  A043: 46,





  /\* PROTEIN NABATI \*/



  A044: 48,

  A045: 49,

  A046: 50,

  A047: 51,

  A048: 52,





  /\* BUAH \*/



  A049: 54,

  A050: 55,

  A051: 56,

  A052: 57,

  A053: 58,





  /\* SAYUR \*/



  A054: 60,

  A055: 61,

  A056: 62,

  A057: 63,

  A058: 64,





  /\* ==========================================================

     PENYIMPANAN

     ========================================================== \*/



  A059: 66,  // Frozen 1 suhu

  A060: 67,  // Frozen 1 jam



  A062: 70,  // Frozen 2 suhu

  A063: 71,  // Frozen 2 jam



  A065: 73,  // Chiller suhu

  A066: 74,  // Chiller jam



  A067: 76,  // Freezer suhu

  A068: 77,  // Freezer jam





  /\* ==========================================================

     BAHAN MAKANAN

     ========================================================== \*/



  A069: 79,

  A070: 81,

  A071: 83,



  A072: 80,

  A073: 82,

  A074: 84,





  /\* ==========================================================

     PERSONAL HIGIENE PERSIAPAN

     ========================================================== \*/



  A075: 85,

  A076: 87,

  A077: 89,



  A078: 86,

  A079: 88,

  A080: 90,





  /\* ==========================================================

     PERSIAPAN

     ========================================================== \*/



  A081: 91,

  A082: 93,

  A083: 95,



  A084: 92,

  A085: 94,

  A086: 96,





  /\* ==========================================================

     MENU RAWAN

     ========================================================== \*/



  A087: 97,

  A088: 98,

  A089: 99,

  A090: 100,

  A091: 101,





  /\* ==========================================================

     PERSONAL HIGIENE PENGOLAHAN

     ========================================================== \*/



  A092: 102,

  A093: 104,

  A094: 106,



  A095: 103,

  A096: 105,





  /\* ==========================================================

     PENGOLAHAN

     ========================================================== \*/



  A098: 107,



  A100: 115,

  A101: 117,



  A104: 116,

  A105: 118,





  /\* ==========================================================

     PENDINGINAN

     ========================================================== \*/



  A106: 119,

  A107: 121,

  A108: 124,

  A109: 125,



  A111: 120,

  A113: 126,





  /\* ==========================================================

     PEMORSIAN

     ========================================================== \*/



  A114: 127,

  A115: 129,

  A116: 131,

  A117: 135,

  A118: 137,

  A119: 139,



  A120: 128,

  A121: 130,



  A122: 132,

  A123: 133,

  A124: 134,



  A125: 136,

  A126: 138,



  A127: 140,

  A128: 141,

  A129: 142,

  A130: 143,

  A131: 144,





  /\* ==========================================================

     ALAT & TEMPAT

     ========================================================== \*/



  A132: 145,

  A133: 147,

  A134: 149,



  A135: 146,

  A136: 148,

  A137: 150,





  /\* ==========================================================

     DISTRIBUSI

     ========================================================== \*/



  A138: 151,

  A139: 152,

  A140: 153,

  A141: 154,

  A142: 155,



  A144: 160,

  A145: 161,

  A146: 162,

  A147: 163,

  A148: 165,





  /\* ==========================================================

     SUHU MATANG

     ========================================================== \*/



  A149: 108,  // Nasi

  A150: 109,  // Daging

  A151: 110,  // Ayam

  A152: 111,  // Ikan

  A153: 112,  // Telur

  A154: 113,  // Kentang

  A155: 114   // Jagung

};





/\* ============================================================

   TEST

   ============================================================ \*/



function ujiChecklistTerakhir() {



  const ss =

    getDatabaseSpreadsheet\_();



  const sheet =

    ss.getSheetByName(

      CONFIG.SHEET_NAME

    );



  if (!sheet) {



    throw new Error(

      'Sheet tidak ditemukan: ' +

      CONFIG.SHEET_NAME

    );

  }



  const row =

    sheet.getLastRow();



  if (row < 2) {



    throw new Error(

      'Belum ada data respons.'

    );

  }



  const data =

    getRowData\_(

      sheet,

      row

    );



  Logger.log(

    'DATABASE: ' +

    ss.getName()

  );



  Logger.log(

    'DATABASE ID: ' +

    ss.getId()

  );



  Logger.log(

    'BARIS: ' +

    row

  );



  Logger.log(

    'TANGGAL: ' +

    getTanggalPemeriksaanRaw\_(data)

  );



  Logger.log(

    'NAMA FROZEN 1: ' +

    getNamaFrozen\_(data, 1)

  );



  Logger.log(

    'NAMA FROZEN 2: ' +

    getNamaFrozen\_(data, 2)

  );



  Logger.log(

    'INSECT KILLER: ' +

    getJumlahInsectKiller\_(data)

  );



  return buatLaporan\_(

    data,

    row

  );

}





/\* ============================================================

   TRIGGER

   ============================================================ \*/



function onFormSubmit(e) {



  if (!e || !e.range) {



    throw new Error(

      'Fungsi ini harus dijalankan melalui trigger Form Submit.'

    );

  }



  const sheet =

    e.range.getSheet();



  if (

    sheet.getName() !==

    CONFIG.SHEET_NAME

  ) {



    return;

  }



  const data =

    getRowData\_(

      sheet,

      e.range.getRow()

    );



  return buatLaporan\_(

    data,

    e.range.getRow()

  );

}





/\* ============================================================

   AMBIL DATA

   ============================================================ \*/



function getRowData\_(

  sheet,

  row

) {



  const lastColumn =

    sheet.getLastColumn();



  const range =

    sheet.getRange(

      row,

      1,

      1,

      lastColumn

    );



  return {



    // NILAI ASLI

    // Penting untuk membaca Tanggal Pemeriksaan

    rawValues:

      range.getValues()[0],



    // NILAI TAMPILAN

    // Dipakai untuk teks, checkbox, suhu, dll.

    values:

      range.getDisplayValues()[0],



    headers:

      sheet

        .getRange(

          1,

          1,

          1,

          lastColumn

        )

        .getDisplayValues()[0],



    row:

      row,



    sheet:

      sheet

  };

}





/\* ============================================================

   NILAI PLACEHOLDER

   ============================================================ \*/



function val\_(

  data,

  key

) {



  const col =

    COL[key];



  if (!col) {



    return '';

  }



  return String(

    data.values[col - 1] || ''

  ).trim();

}





/\* ============================================================

   NILAI BERDASARKAN KOLOM

   ============================================================ \*/



function valKolom\_(

  data,

  col

) {



  if (

    !data.values ||

    !data.values[col - 1]

  ) {



    return '';

  }



  return String(

    data.values[col - 1]

  ).trim();

}





/\* ============================================================

   NORMALISASI

   ============================================================ \*/



function normal\_(

  value

) {



  return String(

    value || ''

  )

    .trim()

    .toLowerCase()

    .replace(

      /[–—]/g,

      '-'

    )

    .replace(

      /\s+/g,

      ' '

    );

}





/\* ============================================================

   ESCAPE REGEX

   ============================================================ \*/



function escapeRegex\_(

  text

) {



  return String(text)

    .replace(

      /[\\\\^$.\*+?()[\\]{}|]/g,

      '\\\\$&'

    );

}





/\* ============================================================

   ANGKA

   ============================================================ \*/



function angka\_(

  value

) {



  let s =

    String(

      value || ''

    ).trim();



  if (!s) {



    return 0;

  }



  s =

    s.replace(

      /\\./g,

      ''

    );



  const n =

    Number(s);



  return isNaN(n)

    ? 0

    : n;

}





/\* ============================================================

   TOTAL PM TERDATA

   ============================================================ \*/



function totalPMTerdata\_(

  data

) {



  return (

    angka\_(

      val\_(

        data,

        'A009'

      )

    ) +



    angka\_(

      val\_(

        data,

        'A011'

      )

    )

  );

}





/\* ============================================================

   TOTAL PM DILAYANI

   ============================================================ \*/



function totalPMDilayani\_(

  data

) {



  /\*

   \* Spreadsheet baru sudah mempunyai

   \* TOTAL PENERIMA MANFAAT pada kolom N.

   \*

   \* Tetapi agar aman, total dihitung

   \* dari PM Peserta Didik + PM 3B.

   \*/



  return (

    angka\_(

      val\_(

        data,

        'A010'

      )

    ) +



    angka\_(

      val\_(

        data,

        'A012'

      )

    )

  );

}





/\* ============================================================

   NILAI BERDASARKAN HEADER

   ============================================================ \*/



function valueByHeader\_(

  data,

  names

) {



  const wanted =

    names.map(

      function(x) {



        return normal\_(x);



      }

    );





  for (

    let i = 0;

    i < data.headers.length;

    i++

  ) {



    const header =

      normal\_(

        data.headers[i]

      );



    if (

      wanted.indexOf(header) !== -1

    ) {



      return String(

        data.values[i] || ''

      ).trim();

    }

  }



  return '';

}





/\* ============================================================

   JUMLAH INSECT KILLER

   ============================================================ \*/



function getJumlahInsectKiller\_(

  data

) {



  return valueByHeader\_(

    data,

    [

      'Jumlah unit insect killer yang berfungsi',

      'Jumlah unit insect killer yang berfungsi baik',

      'Jumlah unit berfungsi'

    ]

  );

}





/\* ============================================================

   NAMA FROZEN

   ============================================================ \*/



function getNamaFrozen\_(

  data,

  nomor

) {



  if (

    nomor === 1

  ) {



    return valueByHeader\_(

      data,

      [

        'frozen 1 - Nama Bahan Baku',

        'Frozen 1 - Nama Bahan Baku',

        'Frozen 1 — Nama Bahan Baku',

        'Frozen 1 Nama Bahan Baku'

      ]

    );

  }





  return valueByHeader\_(

    data,

    [

      'frozen 2 - Nama Bahan Baku',

      'Frozen 2 - Nama Bahan Baku',

      'Frozen 2 — Nama Bahan Baku',

      'Frozen 2 Nama Bahan Baku'

    ]

  );

}





/\* ============================================================

   NAMA BAHAN BAKU

   ============================================================ \*/



function getNamaBahan\_(

  data,

  jenis

) {



  if (

    jenis === 'Karbohidrat'

  ) {



    return valueByHeader\_(

      data,

      [

        'Nama Bahan Baku -Karbohidrat',

        'Nama Bahan Baku - Karbohidrat',

        'Nama Bahan Baku Karbohidrat'

      ]

    );

  }





  if (

    jenis === 'Protein Hewani'

  ) {



    return valueByHeader\_(

      data,

      [

        'Nama Bahan Baku',

        'Nama Protein Hewani'

      ]

    );

  }





  if (

    jenis === 'Protein Nabati'

  ) {



    return valueByHeader\_(

      data,

      [

        'Nama Protein Nabati',

        'Nama Bahan Baku Protein Nabati'

      ]

    );

  }





  if (

    jenis === 'Buah'

  ) {



    return valueByHeader\_(

      data,

      [

        'Nama Buah'

      ]

    );

  }





  if (

    jenis === 'Sayur'

  ) {



    return valueByHeader\_(

      data,

      [

        'Nama Sayur'

      ]

    );

  }





  return '';

}





/\* ============================================================

   FORMAT KETERANGAN BAHAN BAKU

   ============================================================ \*/



function formatKeteranganBahan\_(

  data,

  jenis,

  keyKeterangan

) {



  const nama =

    getNamaBahan\_(

      data,

      jenis

    );



  const ket =

    val\_(

      data,

      keyKeterangan

    );





  if (

    nama &&

    ket

  ) {



    return (

      'Nama: ' +

      nama +

      ' | ' +

      ket

    );

  }





  if (nama) {



    return (

      'Nama: ' +

      nama

    );

  }





  return ket;

}





/\* ============================================================

   BUAT LAPORAN

   ============================================================ \*/



function buatLaporan\_(

  data,

  sourceRow

) {



  const template =

    DriveApp.getFileById(

      CONFIG.TEMPLATE_ID

    );





  /\* ----------------------------------------------------------

     TANGGAL

     ---------------------------------------------------------- \*/



  const tanggalRaw =

    getTanggalPemeriksaanRaw\_(

      data

    );



  const tgl =

    parseTanggal\_(

      tanggalRaw

    );





  /\* ----------------------------------------------------------

     FOLDER

     ---------------------------------------------------------- \*/



  const root =

    getOrCreateFolder\_(

      CONFIG.ROOT_FOLDER_NAME

    );





  const yearFolder =

    getOrCreateChildFolder\_(

      root,

      tgl.year

    );





  const monthFolder = getOrCreateChildFolder\_(

  yearFolder,

  String(tgl.month).padStart(2, '0') + ' - ' + tgl.monthName.toUpperCase()

);





  const dateFolder =

    getOrCreateChildFolder\_(

      monthFolder,

      tgl.fileDate

    );





  /\* ----------------------------------------------------------

     NAMA FILE

     ---------------------------------------------------------- \*/



  const namaSPPG =

  val\_(

    data,

    'A001'

  ) || 'SPPG';



const kepalaSPPG =

  val\_(

    data,

    'A003'

  ) || 'Kepala SPPG';



const tanggalFile =

  String(tgl.year) +

  String(tgl.month).padStart(2, '0') +

  String(tgl.day).padStart(2, '0');



const baseName =

  tanggalFile +

  '\_CHEKLIST\_' +

  namaSPPG +

  '\_' +

  kepalaSPPG;



  /\* ----------------------------------------------------------

     COPY TEMPLATE

     ---------------------------------------------------------- \*/



  const copy =

    template.makeCopy(

      baseName,

      dateFolder

    );





  const docId =

    copy.getId();





  const doc =

    DocumentApp.openById(

      docId

    );





  /\* ----------------------------------------------------------

     ISI DATA

     ---------------------------------------------------------- \*/



  isiSemuaPlaceholder\_(

    doc,

    data

  );





  /\* ----------------------------------------------------------

     KEPUTUSAN

     ---------------------------------------------------------- \*/



  isiKeputusanFinal\_(

    doc.getBody(),

    val\_(

      data,

      'A148'

    )

  );





  /\* ----------------------------------------------------------

     CHECKBOX CEK

     ---------------------------------------------------------- \*/



  tandaiCheckboxCek\_(

    doc.getBody()

  );





  /\* ----------------------------------------------------------

     BERSIHKAN

     ---------------------------------------------------------- \*/



  bersihkanPlaceholderTersisa\_(

    doc

  );





  hapusGarisIsian\_(

    doc

  );





  doc.saveAndClose();





  /\* ----------------------------------------------------------

     EXPORT DOCX

     ---------------------------------------------------------- \*/



  const docxBlob =

    exportGoogleDoc\_(

      docId,

      'docx'

    );



  docxBlob.setName(

    baseName +

    '.docx'

  );



  dateFolder.createFile(

    docxBlob

  );





  /\* ----------------------------------------------------------

     EXPORT PDF

     ---------------------------------------------------------- \*/



  const pdfBlob =

    exportGoogleDoc\_(

      docId,

      'pdf'

    );



  pdfBlob.setName(

    baseName +

    '.pdf'

  );



  dateFolder.createFile(

    pdfBlob

  );





  /\* ----------------------------------------------------------

     HAPUS GOOGLE DOC SEMENTARA

     ---------------------------------------------------------- \*/



  copy.setTrashed(

    true

  );





  Logger.log(

    '======================================'

  );



  Logger.log(

    'LAPORAN BERHASIL'

  );



  Logger.log(

    'Database ID: ' +

    CONFIG.DATABASE_ID

  );



  Logger.log(

    'Baris: ' +

    sourceRow

  );



  Logger.log(

    'Tanggal: ' +

    tanggalRaw

  );



  Logger.log(

    'Folder Tahun: ' +

    tgl.year

  );



  Logger.log(

    'Folder Bulan: ' +

    tgl.month +

    ' - ' +

    tgl.monthName

  );



  Logger.log(

    'Folder Tanggal: ' +

    tgl.fileDate

  );



  Logger.log(

    'Folder URL: ' +

    dateFolder.getUrl()

  );



  Logger.log(

    '======================================'

  );





  return {



    row:

      sourceRow,



    folderUrl:

      dateFolder.getUrl(),



    fileName:

      baseName

  };

}





/\* ============================================================

   ISI PLACEHOLDER

   ============================================================ \*/



function isiSemuaPlaceholder\_(

  doc,

  data

) {



  const containers = [

    doc.getBody()

  ];





  if (

    doc.getHeader()

  ) {



    containers.push(

      doc.getHeader()

    );

  }





  if (

    doc.getFooter()

  ) {



    containers.push(

      doc.getFooter()

    );

  }





  /\* ----------------------------------------------------------

     TOTAL PM

     ---------------------------------------------------------- \*/



  gantiSemua\_(

    containers,

    '{{A013}}',

    totalPMTerdata\_(data)

  );





  gantiSemua\_(

    containers,

    '{{A014}}',

    totalPMDilayani\_(data)

  );





  /\* ----------------------------------------------------------

     INSECT KILLER

     ---------------------------------------------------------- \*/



  gantiSemua\_(

    containers,

    '{{A033}}',

    getJumlahInsectKiller\_(data) || '—'

  );





  /\* ----------------------------------------------------------

     FROZEN NAMA

     ---------------------------------------------------------- \*/



  gantiSemua\_(

    containers,

    '{{A061}}',

    getNamaFrozen\_(

      data,

      1

    )

  );





  gantiSemua\_(

    containers,

    '{{A064}}',

    getNamaFrozen\_(

      data,

      2

    )

  );





  /\* ----------------------------------------------------------

     A097

     CTPS PENGOLAHAN

     ---------------------------------------------------------- \*/



  const ctps =

    normal\_(

      val\_(

        data,

        'A094'

      )

    );





  let ctpsText =

    '';





  if (

    ctps === 'ya'

  ) {



    ctpsText =

      'Sesuai';

  }





  if (

    ctps === 'tidak'

  ) {



    ctpsText =

      'Tidak sesuai';

  }





  gantiSemua\_(

    containers,

    '{{A097}}',

    ctpsText

  );





  /\* ----------------------------------------------------------

     A099

     ---------------------------------------------------------- \*/



  isiA099\_(

    containers,

    data

  );





  /\* ----------------------------------------------------------

     A103

     KOSONG

     ---------------------------------------------------------- \*/



  gantiSemua\_(

    containers,

    '{{A103}}',

    ''

  );





  /\* ----------------------------------------------------------

     A110

     ---------------------------------------------------------- \*/



  const area =

    normal\_(

      val\_(

        data,

        'A106'

      )

    );





  let areaText =

    '';





  if (

    area === 'ya'

  ) {



    areaText =

      'Tersedia / berfungsi.';

  }





  if (

    area === 'tidak'

  ) {



    areaText =

      'Tidak tersedia.';

  }





  gantiSemua\_(

    containers,

    '{{A110}}',

    areaText

  );





  /\* ----------------------------------------------------------

     A111

     SUHU MAKANAN PENDINGINAN

     ---------------------------------------------------------- \*/



  gantiSemua\_(

    containers,

    '{{A111}}',

    valKolom\_(

      data,

      120

    )

  );





  /\* ----------------------------------------------------------

     A112 KOSONG

     ---------------------------------------------------------- \*/



  gantiSemua\_(

    containers,

    '{{A112}}',

    ''

  );





  /\* ----------------------------------------------------------

     A143 DISTRIBUSI

     ---------------------------------------------------------- \*/



  isiSuhuDistribusi\_(

    containers,

    data

  );





  /\* ----------------------------------------------------------

     A149-A155

     ---------------------------------------------------------- \*/



  const suhuMenu = {



    A149: 'Nasi',

    A150: 'Daging',

    A151: 'Ayam',

    A152: 'Ikan',

    A153: 'Telur',

    A154: 'Kentang',

    A155: 'Jagung'

  };





  Object.keys(

    suhuMenu

  ).forEach(

    function(key) {



      const hasil =

        formatSuhuMatang\_(

          data,

          key,

          suhuMenu[key]

        );





      isiBarisSuhu\_(

        containers,

        '{{' + key + '}}',

        hasil

      );

    }

  );





  /\* ----------------------------------------------------------

     PLACEHOLDER BIASA

     ---------------------------------------------------------- \*/



  Object.keys(

    COL

  ).forEach(

    function(key) {



      const khusus = [



        'A013',

        'A014',

        'A033',



        'A061',

        'A064',



        'A097',

        'A099',



        'A103',



        'A110',

        'A111',

        'A112',



        'A143',



        'A148',



        'A149',

        'A150',

        'A151',

        'A152',

        'A153',

        'A154',

        'A155'

      ];





      if (

        khusus.indexOf(key) !== -1

      ) {



        return;

      }





      let value =

        val\_(

          data,

          key

        );





      /\* --------------------------------------------------------

         KETERANGAN BAHAN BAKU

         -------------------------------------------------------- \*/



      if (

        key === 'A038'

      ) {



        value =

          formatKeteranganBahan\_(

            data,

            'Karbohidrat',

            'A038'

          );

      }





      if (

        key === 'A043'

      ) {



        value =

          formatKeteranganBahan\_(

            data,

            'Protein Hewani',

            'A043'

          );

      }





      if (

        key === 'A048'

      ) {



        value =

          formatKeteranganBahan\_(

            data,

            'Protein Nabati',

            'A048'

          );

      }





      if (

        key === 'A053'

      ) {



        value =

          formatKeteranganBahan\_(

            data,

            'Buah',

            'A053'

          );

      }





      if (

        key === 'A058'

      ) {



        value =

          formatKeteranganBahan\_(

            data,

            'Sayur',

            'A058'

          );

      }





      /\* --------------------------------------------------------

         YA / TIDAK

         -------------------------------------------------------- \*/



      if (

        isYesNo\_(key)

      ) {



        isiYesNo\_(

          containers,

          '{{' + key + '}}',

          value

        );



        return;

      }





      /\* --------------------------------------------------------

         JUMLAH

         -------------------------------------------------------- \*/



      if (

        isJumlah\_(key)

      ) {



        isiPilihan\_(

          containers,

          '{{' + key + '}}',

          value,

          [

            'Sesuai',

            'Kurang',

            'Lebih'

          ]

        );



        return;

      }





      /\* --------------------------------------------------------

         KUALITAS

         -------------------------------------------------------- \*/



      if (

        isKualitas\_(key)

      ) {



        isiPilihan\_(

          containers,

          '{{' + key + '}}',

          value,

          [

            'Sesuai',

            'Baik',

            'Kurang Baik'

          ]

        );



        return;

      }





      /\* --------------------------------------------------------

         SUMBER AIR

         -------------------------------------------------------- \*/



      if (

        key === 'A018' ||

        key === 'A019'

      ) {



        isiPilihan\_(

          containers,

          '{{' + key + '}}',

          value,

          [

            'RO',

            'Galon',

            'PDAM',

            'Sumur',

            'Lainnya'

          ]

        );



        return;

      }





      /\* --------------------------------------------------------

         TEXT BIASA

         -------------------------------------------------------- \*/



      gantiSemua\_(

        containers,

        '{{' + key + '}}',

        value

      );

    }

  );

}





/\* ============================================================

   A099

   ============================================================ \*/



function isiA099\_(

  containers,

  data

) {



  const ada =

    adaDataSuhuMatang\_(

      data

    );





  containers.forEach(

    function(container) {



      const found =

        container.findText(

          escapeRegex\_(

            '{{A099}}'

          )

        );





      if (!found) {



        return;

      }





      const cell =

        cariTableCell\_(

          found.getElement()

        );





      if (!cell) {



        container.replaceText(

          escapeRegex\_(

            '{{A099}}'

          ),

          ''

        );



        return;

      }





      cell.replaceText(

        escapeRegex\_(

          '{{A099}}'

        ),

        ''

      );





      /\*

       \* Reset checkbox

       \*/



      cell.replaceText(

        '☑\\\s\*Ya',

        '☐ Ya'

      );



      cell.replaceText(

        '☑\\\s\*Tidak',

        '☐ Tidak'

      );





      /\*

       \* Pilih

       \*/



      if (

        ada

      ) {



        cell.replaceText(

          '☐\\\s\*Ya',

          '☑ Ya'

        );



      } else {



        cell.replaceText(

          '☐\\\s\*Tidak',

          '☑ Tidak'

        );

      }

    }

  );

}





/\* ============================================================

   ADA DATA SUHU MATANG

   ============================================================ \*/



function adaDataSuhuMatang\_(

  data

) {



  return [



    108,

    109,

    110,

    111,

    112,

    113,

    114



  ].some(

    function(col) {



      return String(

        data.values[col - 1] || ''

      ).trim() !== '';

    }

  );

}





/\* ============================================================

   FORMAT SUHU MATANG

   ============================================================ \*/



function formatSuhuMatang\_(

  data,

  key,

  namaMenu

) {



  const col =

    COL[key];





  if (!col) {



    return '';

  }





  const raw =

    String(

      data.values[col - 1] || ''

    ).trim();





  if (!raw) {



    return '';

  }





  let text =

    raw

      .replace(

        /[–—]/g,

        '-'

      )

      .trim();





  /\*

   \* FORMAT:

   \*

   \* 96,3 - 03.15

   \*/



  let match =

    text.match(

      /^\s\*([+-]?\d+(?:[.,]\d+)?)\s\*-\s\*(\d{1,2}[.:]\d{2})\s\*$/i

    );





  if (match) {



    return (

      'Suhu matang ' +

      namaMenu +

      ': ' +

      match[1] +

      ' °C, Jam: ' +

      match[2].replace(

        ':',

        '.'

      )

    );

  }





  /\*

   \* FORMAT:

   \*

   \* 96,3 JAM ,03.15

   \*/



  match =

    text.match(

      /^\s\*([+-]?\d+(?:[.,]\d+)?)\s\*JAM\s\*,?\s\*(\d{1,2}[.:]\d{2})\s\*$/i

    );





  if (match) {



    return (

      'Suhu matang ' +

      namaMenu +

      ': ' +

      match[1] +

      ' °C, Jam: ' +

      match[2].replace(

        ':',

        '.'

      )

    );

  }





  /\*

   \* FORMAT DENGAN °C

   \*/



  match =

    text.match(

      /^\s\*([+-]?\d+(?:[.,]\d+)?)\s\*°?\s\*C?\s\*-\s\*(\d{1,2}[.:]\d{2})\s\*$/i

    );





  if (match) {



    return (

      'Suhu matang ' +

      namaMenu +

      ': ' +

      match[1] +

      ' °C, Jam: ' +

      match[2].replace(

        ':',

        '.'

      )

    );

  }





  /\*

   \* HANYA SUHU

   \*/



  match =

    text.match(

      /^\s\*([+-]?\d+(?:[.,]\d+)?)\s\*(?:°\s\*C)?\s\*$/i

    );





  if (match) {



    return (

      'Suhu matang ' +

      namaMenu +

      ': ' +

      match[1] +

      ' °C'

    );

  }





  /\*

   \* Jika format tidak dikenali,

   \* tetap tampilkan data asli.

   \*/



  return (

    'Suhu matang ' +

    namaMenu +

    ': ' +

    raw

  );

}





/\* ============================================================

   ISI BARIS SUHU

   ============================================================ \*/



function isiBarisSuhu\_(

  containers,

  token,

  value

) {



  containers.forEach(

    function(container) {



      const found =

        container.findText(

          escapeRegex\_(

            token

          )

        );





      if (!found) {



        return;

      }





      const paragraph =

        cariParagraph\_(

          found.getElement()

        );





      /\*

       \* Jika ada data

       \*/



      if (value) {



        container.replaceText(

          escapeRegex\_(token),

          value

        );



        return;

      }





      /\*

       \* Jika kosong,

       \* hapus baris/isi

       \*/



      if (paragraph) {



        const parent =

          paragraph.getParent();





        if (

          parent &&

          parent.getType &&

          parent.getType() ===

            DocumentApp.ElementType.TABLE_CELL

        ) {



          if (

            parent.getNumChildren() > 1

          ) {



            paragraph.removeFromParent();



          } else {



            paragraph.setText('');

          }



        } else {



          paragraph.setText('');

        }



      } else {



        container.replaceText(

          escapeRegex\_(token),

          ''

        );

      }

    }

  );

}





/\* ============================================================

   SUHU DISTRIBUSI

   ============================================================ \*/



function isiSuhuDistribusi\_(

  containers,

  data

) {



  const panas =

    valKolom\_(

      data,

      156

    );





  const jamPanas =

    valKolom\_(

      data,

      157

    );





  const dingin =

    valKolom\_(

      data,

      158

    );





  const jamDingin =

    valKolom\_(

      data,

      159

    );





  let text =

    '';





  if (panas) {



    text +=

      'Makanan panas: ' +

      panas +

      ' °C';





    if (jamPanas) {



      text +=

        ' (jam ' +

        jamPanas +

        ')';

    }

  }





  if (dingin) {



    if (text) {



      text += '\n';

    }





    text +=

      'Di Suhu : ' +

      dingin +

      ' °C';





    if (jamDingin) {



      text +=

        ' (jam ' +

        jamDingin +

        ')';

    }

  }





  gantiSemua\_(

    containers,

    '{{A143}}',

    text

  );

}





/\* ============================================================

   YES / NO

   ============================================================ \*/



function isiYesNo\_(

  containers,

  token,

  value

) {



  const v =

    normal\_(

      value

    );





  const ya =

    v === 'ya' ||

    v === 'yes';





  const tidak =

    v === 'tidak' ||

    v === 'no';





  containers.forEach(

    function(container) {



      const found =

        container.findText(

          escapeRegex\_(token)

        );





      if (!found) {



        return;

      }





      const cell =

        cariTableCell\_(

          found.getElement()

        );





      if (!cell) {



        container.replaceText(

          escapeRegex\_(token),

          ''

        );



        return;

      }





      cell.replaceText(

        escapeRegex\_(token),

        ''

      );





      /\*

       \* RESET

       \*/



      cell.replaceText(

        '☑\\\s\*Ya',

        '☐ Ya'

      );





      cell.replaceText(

        '☑\\\s\*Tidak',

        '☐ Tidak'

      );





      /\*

       \* CENTANG

       \*/



      if (ya) {



        cell.replaceText(

          '☐\\\s\*Ya',

          '☑ Ya'

        );

      }





      if (tidak) {



        cell.replaceText(

          '☐\\\s\*Tidak',

          '☑ Tidak'

        );

      }

    }

  );

}





/\* ============================================================

   PILIHAN

   ============================================================ \*/



function isiPilihan\_(

  containers,

  token,

  value,

  options

) {



  const v =

    normal\_(

      value

    );





  containers.forEach(

    function(container) {



      const found =

        container.findText(

          escapeRegex\_(token)

        );





      if (!found) {



        return;

      }





      const cell =

        cariTableCell\_(

          found.getElement()

        );





      if (!cell) {



        container.replaceText(

          escapeRegex\_(token),

          ''

        );



        return;

      }





      cell.replaceText(

        escapeRegex\_(token),

        ''

      );





      /\*

       \* RESET

       \*/



      options.forEach(

        function(option) {



          cell.replaceText(

            escapeRegex\_(

              '☑ ' +

              option

            ),

            '☐ ' +

            option

          );

        }

      );





      if (!v) {



        return;

      }





      /\*

       \* CENTANG

       \*/



      options.forEach(

        function(option) {



          let cocok =

            v ===

            normal\_(

              option

            );





          if (

            option ===

            'Kurang Baik' &&

            v.indexOf(

              'kurang baik'

            ) !== -1

          ) {



            cocok = true;

          }





          if (

            option ===

            'Lainnya' &&

            v.indexOf(

              'lain'

            ) !== -1

          ) {



            cocok = true;

          }





          if (cocok) {



            cell.replaceText(

              escapeRegex\_(

                '☐ ' +

                option

              ),

              '☑ ' +

              option

            );

          }

        }

      );

    }

  );

}





/\* ============================================================

   KEPUTUSAN FINAL

   ============================================================ \*/



function isiKeputusanFinal\_(

  body,

  value

) {



  const v =

    normal\_(

      value

    );





  const GO =

    'GO — produksi dapat dimulai / dilanjutkan';





  const GO_CATATAN =

    'GO dengan catatan — lanjut, perbaikan segera (isi Temuan Khusus)';





  const NO_GO =

    'NO-GO — escalate to the relevant authority before production / distribution continues';





  /\*

   \* RESET

   \*/



  body.replaceText(

    '[☐☑]\\\s\*' +

    escapeRegex\_(GO),

    '☐ ' +

    GO

  );





  body.replaceText(

    '[☐☑]\\\s\*' +

    escapeRegex\_(GO_CATATAN),

    '☐ ' +

    GO_CATATAN

  );





  body.replaceText(

    '[☐☑]\\\s\*' +

    escapeRegex\_(NO_GO),

    '☐ ' +

    NO_GO

  );





  /\*

   \* GO

   \*/



  if (

    v === 'go' ||

    v.indexOf(

      'go —'

    ) === 0 ||

    v.indexOf(

      'go -'

    ) === 0 ||

    v.indexOf(

      'go produksi'

    ) === 0

  ) {



    body.replaceText(

      '☐\\\s\*' +

      escapeRegex\_(GO),

      '☑ ' +

      GO

    );



    return;

  }





  /\*

   \* GO DENGAN CATATAN

   \*/



  if (

    v.indexOf(

      'go dengan catatan'

    ) === 0

  ) {



    body.replaceText(

      '☐\\\s\*' +

      escapeRegex\_(GO_CATATAN),

      '☑ ' +

      GO_CATATAN

    );



    return;

  }





  /\*

   \* NO-GO

   \*/



  if (

    v.indexOf(

      'no-go'

    ) === 0 ||

    v.indexOf(

      'no go'

    ) === 0 ||

    v === 'nogo'

  ) {



    body.replaceText(

      '☐\\\s\*' +

      escapeRegex\_(NO_GO),

      '☑ ' +

      NO_GO

    );

  }

}





/\* ============================================================

   CHECKBOX KOLOM CEK

   ============================================================ \*/



function tandaiCheckboxCek\_(

  body

) {



  const tables =

    body.getTables();





  tables.forEach(

    function(table) {



      if (

        table.getNumRows() < 2

      ) {



        return;

      }





      const header =

        table

          .getRow(0)

          .getCell(0)

          .getText()

          .trim()

          .toLowerCase();





      if (

        header !== 'cek'

      ) {



        return;

      }





      for (

        let r = 1;

        r < table.getNumRows();

        r++

      ) {



        const cell =

          table

            .getRow(r)

            .getCell(0);





        const text =

          cell.getText();





        if (

          text.indexOf('☐') !== -1

        ) {



          cell.replaceText(

            '☐',

            '☑'

          );

        }

      }

    }

  );

}





/\* ============================================================

   PLACEHOLDER CLEANUP

   ============================================================ \*/



function bersihkanPlaceholderTersisa\_(

  doc

) {



  const containers = [

    doc.getBody()

  ];





  if (

    doc.getHeader()

  ) {



    containers.push(

      doc.getHeader()

    );

  }





  if (

    doc.getFooter()

  ) {



    containers.push(

      doc.getFooter()

    );

  }





  containers.forEach(

    function(container) {



      /\*

       \* {{A001}}

       \*/



      container.replaceText(

        '\\\\{\\\\{A\\\d+\\\\}\\\\}',

        ''

      );





      /\*

       \* {{A001}

       \*/



      container.replaceText(

        '\\\\{\\\\{A\\\d+\\\\}',

        ''

      );





      /\*

       \* {A001}}

       \*/



      container.replaceText(

        '\\\\{A\\\d+\\\\}\\\\}',

        ''

      );

    }

  );

}





/\* ============================================================

   HAPUS GARIS ISIAN

   ============================================================ \*/



function hapusGarisIsian\_(

  doc

) {



  const containers = [

    doc.getBody()

  ];





  if (

    doc.getHeader()

  ) {



    containers.push(

      doc.getHeader()

    );

  }





  if (

    doc.getFooter()

  ) {



    containers.push(

      doc.getFooter()

    );

  }





  containers.forEach(

    function(container) {



      container.replaceText(

        '\_{2,}',

        ''

      );





      container.replaceText(

        '＿{2,}',

        ''

      );

    }

  );

}





/\* ============================================================

   FIELD YA / TIDAK

   ============================================================ \*/



function isYesNo\_(

  key

) {



  return [



    'A015',

    'A016',

    'A017',



    'A026',

    'A027',

    'A028',

    'A029',



    'A069',

    'A070',

    'A071',



    'A075',

    'A076',

    'A077',



    'A081',

    'A082',

    'A083',



    'A087',

    'A088',

    'A089',

    'A090',

    'A091',



    'A092',

    'A093',

    'A094',



    'A098',

    'A100',

    'A101',



    'A106',

    'A107',

    'A108',

    'A109',



    'A114',

    'A115',

    'A116',

    'A117',

    'A118',

    'A119',



    'A132',

    'A133',

    'A134',



    'A142',

    'A144',

    'A145'



  ].indexOf(key) !== -1;

}





/\* ============================================================

   FIELD JUMLAH

   ============================================================ \*/



function isJumlah\_(

  key

) {



  return [



    'A034',

    'A039',

    'A044',

    'A049',

    'A054'



  ].indexOf(key) !== -1;

}





/\* ============================================================

   FIELD KUALITAS

   ============================================================ \*/



function isKualitas\_(

  key

) {



  return [



    'A035',

    'A040',

    'A045',

    'A050',

    'A055'



  ].indexOf(key) !== -1;

}





/\* ============================================================

   CARI CELL TABLE

   ============================================================ \*/



function cariTableCell\_(

  element

) {



  let parent =

    element.getParent();





  while (

    parent

  ) {



    if (

      parent.getType &&

      parent.getType() ===

        DocumentApp.ElementType.TABLE_CELL

    ) {



      return parent;

    }





    parent =

      parent.getParent();

  }





  return null;

}





/\* ============================================================

   CARI PARAGRAPH

   ============================================================ \*/



function cariParagraph\_(

  element

) {



  let parent =

    element;





  while (

    parent

  ) {



    if (

      parent.getType &&

      parent.getType() ===

        DocumentApp.ElementType.PARAGRAPH

    ) {



      return parent;

    }





    parent =

      parent.getParent();

  }





  return null;

}





/\* ============================================================

   REPLACE SEMUA

   ============================================================ \*/



function gantiSemua\_(

  containers,

  token,

  value

) {



  containers.forEach(

    function(container) {



      container.replaceText(

        escapeRegex\_(token),

        String(

          value == null

            ? ''

            : value

        )

      );

    }

  );

}





/\* ============================================================

   DATABASE

   ============================================================ \*/



function getDatabaseSpreadsheet\_() {



  const ss =

    SpreadsheetApp.openById(

      CONFIG.DATABASE_ID

    );





  Logger.log(

    'DATABASE MASTER: ' +

    ss.getName()

  );





  Logger.log(

    'DATABASE ID: ' +

    ss.getId()

  );





  return ss;

}





/\* ============================================================

   TANGGAL PEMERIKSAAN

   ============================================================ \*/



function getTanggalPemeriksaanRaw\_(

  data

) {



  const index =

    COL.A005 - 1;





  const raw =

    data.rawValues[index];





  /\*

   \* Jika Date

   \*/



  if (

    raw instanceof Date &&

    !isNaN(

      raw\.getTime()

    )

  ) {



    return Utilities.formatDate(

      raw,

      CONFIG.TIMEZONE,

      'yyyy-MM-dd'

    );

  }





  /\*

   \* String

   \*/



  const text =

    String(

      raw == null

        ? ''

        : raw

    ).trim();





  if (

    text

  ) {



    return text;

  }





  return val\_(

    data,

    'A005'

  );

}





/\* ============================================================

   PARSE TANGGAL

   ============================================================ \*/

function parseTanggal\_(raw) {

  const namaBulan = [

    'Januari',

    'Februari',

    'Maret',

    'April',

    'Mei',

    'Juni',

    'Juli',

    'Agustus',

    'September',

    'Oktober',

    'November',

    'Desember'

  ];



  if (raw instanceof Date && !isNaN(raw\.getTime())) {

    const day = raw\.getDate();

    const month = raw\.getMonth() + 1;

    const year = raw\.getFullYear();



    return {

      day: day,

      month: month,

      year: year,

      monthName: namaBulan[month - 1],

      fileDate:

        String(day).padStart(2, '0') + '-' +

        String(month).padStart(2, '0') + '-' +

        year

    };

  }



  if (raw === null || raw === undefined || raw === '') {

    throw new Error('Tanggal pemeriksaan kosong.');

  }



  const s = String(raw).trim();



  let day;

  let month;

  let year;

  let m;



  // Format YYYY-MM-DD

  m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);



  if (m) {

    year = Number(m[1]);

    month = Number(m[2]);

    day = Number(m[3]);

  }



  // Format DD-MM-YYYY

  if (!m) {

    m = s.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);



    if (m) {

      day = Number(m[1]);

      month = Number(m[2]);

      year = Number(m[3]);

    }

  }



  // Format DD/MM/YYYY

  if (!m) {

    m = s.match(/^(\d{1,2})\\/(\d{1,2})\\/(\d{4})$/);



    if (m) {

      day = Number(m[1]);

      month = Number(m[2]);

      year = Number(m[3]);

    }

  }



  // Tanggal yang berada di dalam teks

  if (!m) {

    m = s.match(/(\d{1,2})-(\d{1,2})-(\d{4})/);



    if (m) {

      day = Number(m[1]);

      month = Number(m[2]);

      year = Number(m[3]);

    }

  }



  if (!m) {

    throw new Error(

      'Format tanggal tidak dikenali: ' +

      s +

      '. Gunakan format DD-MM-YYYY atau DD/MM/YYYY.'

    );

  }



  // Validasi tanggal

  if (

    !Number.isInteger(day) ||

    !Number.isInteger(month) ||

    !Number.isInteger(year) ||

    month < 1 ||

    month > 12 ||

    day < 1 ||

    day > 31

  ) {

    throw new Error('Tanggal tidak valid: ' + s);

  }



  // Pastikan tanggal tidak digeser JavaScript

  const testDate = new Date(year, month - 1, day);



  if (

    testDate.getFullYear() !== year ||

    testDate.getMonth() !== month - 1 ||

    testDate.getDate() !== day

  ) {

    throw new Error('Tanggal tidak valid: ' + s);

  }



  return {

    day: day,

    month: month,

    year: year,

    monthName: namaBulan[month - 1],

    fileDate:

      String(day).padStart(2, '0') + '-' +

      String(month).padStart(2, '0') + '-' +

      year

  };

}



/\* ============================================================

   FOLDER

   ============================================================ \*/



function getOrCreateFolder\_(

  name

) {



  const folders =

    DriveApp.getFoldersByName(

      name

    );





  if (

    folders.hasNext()

  ) {



    return folders.next();

  }





  return DriveApp.createFolder(

    name

  );

}





/\* ============================================================

   CHILD FOLDER

   ============================================================ \*/



function getOrCreateChildFolder\_(

  parent,

  name

) {



  const folders =

    parent.getFoldersByName(

      name

    );





  if (

    folders.hasNext()

  ) {



    return folders.next();

  }





  return parent.createFolder(

    name

  );

}





/\* ============================================================

   EXPORT

   ============================================================ \*/



function exportGoogleDoc\_(

  docId,

  format

) {



  const url =

    'https\://docs.google.com/document/d/' +

    docId +

    '/export?format=' +

    format;





  const response =

    UrlFetchApp.fetch(

      url,

      {



        headers: {



          Authorization:

            'Bearer ' +

            ScriptApp.getOAuthToken()

        },



        muteHttpExceptions:

          true

      }

    );





  const code =

    response.getResponseCode();





  if (

    code !== 200

  ) {



    throw new Error(

      'Gagal export ' +

      format +

      '. HTTP ' +

      code

    );

  }





  return response.getBlob();

}





/\* ============================================================

   PASANG TRIGGER

   ============================================================ \*/



function pasangTriggerOtomatis() {



  const ss =

    getDatabaseSpreadsheet\_();





  /\*

   \* Hapus trigger onFormSubmit lama

   \*/



  ScriptApp

    .getProjectTriggers()

    .forEach(

      function(trigger) {



        if (

          trigger.getHandlerFunction() ===

          'onFormSubmit'

        ) {



          ScriptApp.deleteTrigger(

            trigger

          );

        }

      }

    );





  /\*

   \* Pasang trigger ke DATABASE MASTER BARU

   \*/



  ScriptApp

    .newTrigger(

      'onFormSubmit'

    )

    .forSpreadsheet(ss)

    .onFormSubmit()

    .create();





  Logger.log(

    'TRIGGER BERHASIL DIPASANG'

  );



  Logger.log(

    'DATABASE: ' +

    ss.getId()

  );

}





/\* ============================================================

   HAPUS TRIGGER

   ============================================================ \*/



function hapusTriggerOtomatis() {



  ScriptApp

    .getProjectTriggers()

    .forEach(

      function(trigger) {



        if (

          trigger.getHandlerFunction() ===

          'onFormSubmit'

        ) {



          ScriptApp.deleteTrigger(

            trigger

          );

        }

      }

    );





  Logger.log(

    'SEMUA TRIGGER onFormSubmit DIHAPUS'

  );

}



function pasangTriggerChecklist() {

  const ss = SpreadsheetApp.openById(CONFIG.DATABASE_ID);



  // Hapus trigger onFormSubmit lama jika ada

  const triggers = ScriptApp.getProjectTriggers();



  triggers.forEach(function(trigger) {

    if (trigger.getHandlerFunction() === 'onFormSubmit') {

      ScriptApp.deleteTrigger(trigger);

    }

  });



  // Buat trigger otomatis dari spreadsheet database

  ScriptApp.newTrigger('onFormSubmit')

    .forSpreadsheet(ss)

    .onFormSubmit()

    .create();



  Logger.log('Trigger CHECKLIST berhasil dipasang.');

}