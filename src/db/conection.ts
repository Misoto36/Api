import mysql2 from 'mysql2'
import keys from '../keys'

const conection = mysql2.createConnection(keys)

export default conection