# MEMO
####################################################################
//ห้ามใส่ / เกินมา
res.header('Access-Control-Allow-Origin', 'http://localhost:3000/')
//ตัวอย่างที่ถูก http://localhost:3000
####################################################################
//ห้ามใส่ IP
res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')
//ตัวอย่างที่ถูก http://localhost:3000
####################################################################
//ห้ามกำหนดแบบนี้
res.header('Access-Control-Allow-Origin', 'http://localhost:3000, http://localhost:3001')

//เมื่อต้องการอนุญาต มากกว่า1 ตัวอย่างที่ถูก
const ALLOW_ORIGIN = [ 'http://localhost:3000', 'http://localhost:3001']                     
const ORIGIN = req.headers.origin 
                            
if (ALLOW_ORIGIN.includes(ORIGIN)) {
   res.header('Access-Control-Allow-Origin', ORIGIN)
}
####################################################################
//หากมีการส่ง Headers ที่นอกเหนือจากการกำหนดให้ใส่ลงไปด้วย เช่น X-Session-Id
res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization, X-Session-Id')
####################################################################
