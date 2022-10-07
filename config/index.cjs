/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx5ce30a27842da1f1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4bf28a878094e9320520408769524fe6',

  PROVINCE: '上海',
  CITY: '上海',
  
    USERS: [
    {
      // 想要发送的人的名字
      name: '',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogm0j6fFTXMGH5N4qZtq3x0q4bGE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'fA_PDDnh00C7gEh0zq3Kh68TU84UWEuzpAMQU90AIlE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-17',
      festivals: [

        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '多多', year: '1997', date: '03-17',
        },
        // ‘type'中“*生日”表明阴历生日
        {
          type: '*生日', name: '妈妈', year: '1972', date: '05-06',
        },
        {
          type: '*生日', name: '爸爸', year: '1972', date: '03-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '明昊',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogm0j6YaJUdyiNHM5WL1NjlOMzl0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'fA_PDDnh00C7gEh0zq3Kh68TU84UWEuzpAMQU90AIlE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-17',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '多多', year: '1997', date: '03-17',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2011', date: '04-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },   
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'FTVxiC5oI77RRcHqmdOoJQLbH6TqfcBbdPY8Zoh3zBw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogm0j6YaJUdyiNHM5WL1NjlOMzl0',
    }
  ],

}

module.exports = USER_CONFIG

