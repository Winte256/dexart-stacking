// @ts-nocheck
const { promises, existsSync, mkdirSync } = require('fs')
const path = require('path')
const { GoogleSpreadsheet } = require('google-spreadsheet')

require('dotenv').config({ path: path.join(process.cwd(), '.env') })

const distDir = path.join(process.cwd(), 'langs', 'dist')

const clearDist = async () => {
  try {
    const files = await promises.readdir(distDir)

    files.forEach(async (file) => {
      await promises.unlink(path.join(distDir, file))
    })
  } catch (err) {
    console.error(err)
  }
}

const writeLangFile = async (key, value) => {
  const fileContent = `/* eslint-disable */\nexport default ${value}`

  try {
    await promises.writeFile(path.join(distDir, key), fileContent, 'utf8')
  } catch (e) {
    console.error('что то пошло не так с сохраненим файла переводов', key)
  }
}

const normalizeText = (t = '') =>
  t.trim().replace(/\n/gi, ' ').replace(/\s+/g, ' ').trim()

const generateFiles = async (messages) => {
  // check if folder is exists
  if (!existsSync(distDir)) {
    mkdirSync(distDir)
  }

  await clearDist()

  const langs = Object.keys(messages)
  const filesNames = langs.map((lang) => `${lang}.js`)

  await Promise.all(
    filesNames.map((key, i) => {
      const lang = langs[i]
      const currentMessages = messages[lang]
      const stringifiedMessages = JSON.stringify(currentMessages)

      return writeLangFile(key, stringifiedMessages)
    })
  )
}

const getMessages = async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

  await doc.useApiKey(process.env.GOOGLE_SHEETS_API_KEY)
  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0]

  const rows = await sheet.getRows()

  const { headerValues } = sheet
  const langs = headerValues.splice(1)

  const messages = {}

  langs.forEach((l) => {
    messages[l] = {}
  })

  rows.forEach((row) => {
    langs.forEach((lang) => {
      const value = row[lang]
      const result = normalizeText(value)
      if (result) {
        messages[lang][row.key] = normalizeText(value)
      }
    })
  })

  return messages
}

module.exports = async () => {
  try {
    const messages = await getMessages()

    await generateFiles(messages)
  } catch (err) {
    console.error(err)
  }
}
