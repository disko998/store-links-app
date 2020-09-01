import * as Yup from 'yup'

export const INITIAL_FORM_VALUE = {
    store_link: '', //http://website.com
    instagram: '', //instagram.com/john123
    whatsApp: '', //1234567
    store_number: '', //12345567
    owner_number: '', //12345678
    email: '', //johdoe123@gmail.com
    logo: '',
}

export const AddStoreOwnerSchema = Yup.object().shape({
    store_link: Yup.string()
        .trim()
        .url('Invalid store link')
        .required('Required'),
    logo: Yup.string().required('Required'),
    instagram: Yup.string()
        .trim()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    whatsApp: Yup.string()
        .trim()
        .min(7, 'min 7 digs')
        .max(30, 'max 30 digs')
        .required('Required'),
    store_number: Yup.string()
        .trim()
        .min(5, 'min 5 digs')
        .max(30, 'max 30 digs')
        .required('Required'),
    owner_number: Yup.string()
        .trim()
        .min(5, 'min 5 digs')
        .max(30, 'max 30 digs')
        .required('Required'),
    email: Yup.string().trim().email('Invalid email').required('Required'),
})

export const AddStoreSchema = Yup.object().shape({
    store_link: Yup.string()
        .trim()
        .url('Invalid store link')
        .required('Link is Required'),
})
