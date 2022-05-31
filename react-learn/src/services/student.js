const appkey = 'jerry_1602593073067';
const baseUrl = 'http://open.duyiedu.com'
/**
 * 获取所有学生
 */
export async function getAllStudent() {
   return await fetch(`${baseUrl}/api/student/findAll?appkey=${appkey}`).then(resp=>resp.json()).then(resp=>resp.data)
}