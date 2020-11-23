import multer from 'multer'

export const multerMidleware = multer({
  dest: 'uploads/',
  storage: multer.memoryStorage(),
})
