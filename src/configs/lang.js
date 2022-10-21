const indonesian = {
    'archive': 'Catatan Arsip',
    'search_by_title': 'Cari berdasarkan title...',
    'active': 'Catatan Aktif',
    'empty_note': 'Catatan Kosong',
    'title': 'Judul',
    'body': 'Body',
    'add': 'Tambah',
    'notes': 'Catatan',
    'title_placeholder': 'Silahkan mengisi judul...',
    'body_placeholder': 'Silahkan mengisi body...',
    'rest_character': 'Sisa karakter',
    'submit': 'Simpan',
    'login': 'Masuk',
    'register': 'Daftar',
    'have_account': 'Belum mempunyai akun?',
    'back_login': 'Kembali ke masuk',
    'name': 'Nama',
    'password': 'Kata Sandi',
    'confirm_password': 'Konfirmasi Kata Sandi',
    'unmatch_password': 'Kata sandi belum sama',
    'not_found': 'Halaman tidak ditemukan :(',
    'back_home': 'Kembali ke home',

}

const english = {
    'archive': 'Archive Notes',
    'search_by_title': 'Search by title...',
    'active': 'Active Note',
    'empty_note': 'Empty Note',
    'title': 'Title',
    'body': 'Body',
    'add': 'Add',
    'notes': 'Notes',
    'title_placeholder': 'Please fill the title...',
    'body_placeholder': 'Please fill the body...',
    'rest_character': 'Rest of character',
    'submit': 'Submit',
    'login': 'Login',
    'register': 'Register',
    'have_account': 'Dont have an account yet?',
    'back_login': 'Back to login',
    'name': 'Name',
    'password': 'Password',
    'confirm_password': 'Confirm Password',
    'unmatch_password': 'Password dont match',
    'not_found': 'Page not found :(',
    'back_home': 'Back to home',
}

export const language = (lang) => {
    const langList = {
        id: indonesian,
        en: english
    }
    return langList[lang]
}