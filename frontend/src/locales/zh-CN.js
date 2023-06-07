/**
 * @Author: Bi Ying
 * @Date:   2022-05-24 13:48:55
 * @Last Modified by:   Bi Ying
 * @Last Modified time: 2023-06-08 02:26:27
 */
export default {
  lang: '中文',
  meta: {
    'title': '向量脉络',
    'description': '基于AI的知识库+工作流管理系统',
  },
  router: {
    base: '向量脉络',
    basic: {
      children: {
        'index': '首页',
      }
    },
    workspace: {
      children: {
        'workflow_space': '我的工作流空间',
        'data_space': '我的数据空间',
        'workflow_main': '工作流主页',
        'workflow_use': '工作流使用',
        'workflow_template': '工作流模板',
        'database_detail': '数据库详情',
      }
    },
    account: {
      children: {
        'info': '我的账号信息',
        'settings': '我的账号设置',
      }
    },
    user: {
      children: {
        'login': '登录',
        'register': '注册',
        'register_result': '注册结果',
      }
    },
  },
  common: {
    'vector_vein': '向量脉络',
    'time_length': '{hours}小时{minutes}分钟',
    'refresh': '刷新',
    'index': '首页',
    'update_log': '更新日志',
    'my': '我的',
    'all': '全部',
    'add': '添加',
    'create': '创建',
    'status': '状态',
    'tags': '标签',
    'action': '操作',
    'output': '输出',
    'support_inquiries': '问题咨询：',
    'notice': '注意',
    'ok': '好的',
    'save': '保存',
    'pay_channel': '支付方式',
    'credits': '积分',
    'total_price': '总价格',
    'total_credits': '总积分',
    'bonus_credits': '奖励积分',
    'available_credits': '可用积分',
    'pay': '付款',
    'warning': '警告',
    'copy_success': '复制成功',
    'alipay': '支付宝',
    'wechatpay': '微信支付',
    'create_time': '创建时间',
    'update_time': '更新时间',
    'update_time_format': '更新时间: {time}',
  },
  email: {
    verify: {
      'email_verify_success': '邮箱验证成功！',
      'email_verify_success_subtitle': '您的邮箱验证成功，快来试用一下吧！',
      'check_control_panel': '查看控制台',
      'email_verify_failed': '邮箱验证失败！',
      'email_verify_failed_subtitle': '验证链接有误，请重新检查并刷新',
      'email_verify_expired_subtitle': '链接已超时，请重新发送',
      'resend_email': '重新发送邮件',
      'email_already_verified': '邮箱已验证！',
      'email_already_verified_subtitle': '该链接已验证，请直接登陆',
      'please_verify_your_email': '请验证您的邮箱',
      'please_verify_your_email_subtitle': '为保证您的账号安全，我们需要确认您的邮箱地址：',
      'sending_failed': '发送失败',
      'too_frequently_resend': '您的邮件发送过于频繁，请稍后再试',
      'sending_successfull': '发送成功',
      'please_relogin_after_verify': '验证成功后请重新登录网站',
    }
  },
  userAuth: {
    common: {
      'please_enter': '请输入',
      'username': '用户名',
      'email': 'Email电子邮箱',
      'mobile': '手机',
      'verification_code': '验证码',
      'send_verification_code': '发送验证码',
      'password': '密码',
      'login': '登录',
      'logout': '登出',
      'or': '或',
      'register': '注册新账号',
      'sign_up': '注册新账号',
      'ref_code': '邀请码（可选）',
      'error': '服务器错误',
    },
    login: {
      'please_enter_username': '请输入手机号或用户名',
      'please_enter_email': '请输入邮箱',
      'please_enter_password': '请输入密码',
      'remember_account': '记住账号',
      'forget_password': '忘记密码',
      'account_not_exists_title': '密码错误或账号不存在',
      'account_not_exists_content': '请检查账号密码是否正确或注册新账号',
      'mobileLogin': '手机号登录',
      'wechatLogin': '微信登录',
      'email_login': '邮箱登录',
    },
    register: {
      'region_search_or_select': '请搜索或选择您的区域',
      'please_select_your_region': '请选择您的区域',
      'human_verification_error': '人机验证失败！',
      'connection_error': '连接错误！',
      'email_already_exists': '该邮箱已注册，请直接登录',
      'username_already_exists': '该用户名已被使用',
      'register_success': '注册成功，请验证邮件',
    },
    registerResult: {
      'check_email': '查看邮箱',
      'back_to_login': '返回登录',
      'verification_email_sent': '激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。',
      'your_email_account_register_success': '你的账户：{email} 注册成功',
    },
    forgetPassword: {
      'verify_email': '验证邮箱',
      'enter_new_password': '输入新密码',
      'verify': '验证',
      'verification_code_send_success': '验证码已发送',
      'human_verification_error': '人机验证失败！',
      'connection_error': '连接错误！',
      'email_not_exists': '该邮箱未注册',
      'reset_password': '重置密码',
      'reset_success': '重置密码成功',
    }
  },
  userAccount: {
    accountInfo: {
      'my_account': '我的账号',
      'my_credits': '我的积分',
    },
    accountSettings: {
      'account_email': '账号邮箱',
      'account_settings': '账号设置',
    }
  },
  workspace: {
    workflowSpace: {
      'workflow_index': '工作流首页',
      'user_fast_access_workflows': '快速访问工作流',
      'add_new_workflow': '新建工作流',
      'new_workflow': '新工作流',
      'share_workflow': '分享',
      'clone_workflow': '克隆',
      'clone_success': '克隆成功',
      'clone_failed': '克隆失败',
      'add_to_fast_access': '添加到快速访问',
      'add_to_fast_access_confirm': '确认添加该工作流到快速访问？',
      'delete_from_fast_access': '从快速访问删除',
      'delete_from_fast_access_confirm': '确认从快速访问删除该工作流？',
      'add_to_fast_access_success': '添加到快速访问成功',
      'add_to_fast_access_failed': '添加到快速访问失败',
      'delete_from_fast_access_success': '从快速访问删除成功',
      'delete_from_fast_access_failed': '从快速访问删除失败',
      'update_time': '更新时间: {time}',
      'inputs': '输入',
      'outputs': '输出',
      'triggers': '触发器',
      'run': '运行',
      'edit': '编辑',
      'delete': '删除',
      'delete_confirm': '确认删除该工作流？',
      'delete_success': '删除成功',
      'delete_failed': '删除失败',
      'save_success': '保存成功',
      'save_failed': '保存失败',
      'get_workflow_failed': '获取工作流失败',
      'submit_workflow_success': '已提交工作流运行请求',
      'submit_workflow_failed': '提交工作流运行请求失败',
      'run_workflow_success': '运行工作流成功',
      'run_workflow_failed': '运行工作流失败',
      'update_schedule_success': '更新定时设置成功',
      'update_schedule_failed': '更新定时设置失败',
      'delete_schedule_trigger_confirm': '确认删除该定时设置？',
      'delete_schedule_success': '删除定时设置成功',
      'delete_schedule_failed': '删除定时设置失败',
      'brief': '简介',
      'field_is_empty': '{field} 不能为空',
      'record_status': '工作流运行记录状态: {status}',
      'record_error_task': '出错任务: {task}',
      'maximize_output': '最大化输出区域',
      'normalize_output': '恢复输出区域尺寸',
    },
    workflowSpaceMain: {
      'my_workflows': '我的工作流',
      'workflow_title': '工作流',
      'tags': '标签',
      'tags_filter': '标签筛选',
      'update_time': '更新时间',
      'create_workflow': '创建工作流',
      'official_workflow_template': '官方工作流模板',
      'community_workflow_template': '社区分享工作流模板',
    },
    workflowTemplate: {
      'template': '模板',
      'add_to_my_workflows': '添加到我的工作流',
      'add_success': '添加成功',
      'add_failed': '添加失败',
      'author': '作者: {author}',
      'used_count': '{count} 人已使用',
      'workflow_template_tags': '工作流模板标签',
      'edit_template': '编辑模板',
      'update_success': '更新成功',
      'update_failed': '更新失败',
    },
    dataSpace: {
      'create': '新建',
      'create_success': '创建成功',
      'create_failed': '创建失败',
      'databaseName': '数据库名称',
      'status_invalid': '无效',
      'status_expired': '已过期',
      'status_deleted': '已删除',
      'status_valid': '有效',
      'status_error': '错误',
      'status_creating': '创建中',
      'status_deleting': '删除中',
      'delete': '删除',
      'delete_confirm': '确认删除该数据库？删除后不可恢复！',
      'delete_success': '删除成功',
      'delete_failed': '删除失败',
    },
    databaseDetail: {
      'add_object': '添加数据',
      'object_title': '数据名称',
      'object_source_url': '来源链接',
      'object_type': '数据类型',
      'add_method': '添加方式',
      'add_method_url': '从链接抓取',
      'add_method_files': '上传文件',
      'add_method_text': '输入文本',
      'crawl_data_from_url': '从链接爬取数据',
      'use_oversea_crawler': '使用海外爬虫节点',
      'object_content': '数据内容',
      'content_empty': '内容为空！',
      'create_success': '添加成功',
      'create_failed': '添加失败',
      'delete_success': '删除成功',
      'delete_failed': '删除失败',
      'check_detail_data': '查看详细数据',
      'source_url': '来源链接',
      'data_type': '数据类型',
      'data_type_TEXT': '文本',
      'data_type_IMAGE': '图片',
      'data_type_AUDIO': '音频',
      'data_type_VIDEO': '视频',
      'data_type_OTHER': '其他',
      'delete_confirm': '确认删除该数据？',
      'delete': '删除',
    },
  },
  components: {
    layout: {
      basicHeader: {
        'workflow_space': '工作流',
        'data_space': '数据',
      },
      settingDrawer: {
        'open': '打开设置',
        'close': '关闭设置',
        'save': '保存设置',
        'save_success': '保存成功',
        'my_setting': '我的设置',
        'openai_api_type': 'OpenAI API类型',
        'openai': 'OpenAI',
        'azure': 'Azure',
        'openai_api_key': 'OpenAI API Key',
        'openai_api_base': 'OpenAI API Base',
        'openai_chat_engine': 'OpenAI Chat Engine',
        'openai_embedding_engine': 'OpenAI Embedding Engine',
        'output_folder': '输出文件夹',
        'select_folder': '选择文件夹',
        'email_settings': '邮件设置',
        'email_user': '邮箱账号',
        'email_password': '邮箱密码',
        'email_smtp_host': '发信服务器',
        'email_smtp_port': '发信端口号',
        'email_smtp_ssl': 'SMTP SSL',
        'pexels_api_key': 'Pexels API Key',
        'stable_diffusion_base_url': 'Stable Diffusion URL',
      },
      helpDropdown: {
        'help': '帮助',
        'about': '关于',
        'documentation': '文档',
        'software_update': '软件更新',
        'check_update': '检查更新',
        'update_available': '有新版本可用',
        'new_version': '新版本 {version} {releaseDatetime}',
        'about_vectorvein': '关于向量脉络',
        'about_vectorvein_description': '### 利用AI的力量构建您的自动化工作流程\n#### 无需编程，只需拖拽即可创建强大的工作流，自动化所有任务。\n\n向量脉络（VectorVein）开源版由Maker毕开发，可用于个人使用，不可用于商业使用。',
      },
    },
    markdownEditor: {
      'raw_text': '无格式文本',
      'markdown_text': 'Markdown文本',
    },
    workspace: {
      workflowEditor: {
        'add_node': '添加节点',
        'add_tag': '添加标签',
        'brief_editor': '描述编辑器',
        'brief_images': '图片',
      },
      uploaderFieldUse: {
        'upload': '上传',
        'upload_success': '{file} 上传成功',
        'upload_failed': '{file} 上传失败',
        'uploader_text': '点击或拖拽文件到此区域上传',
        'uploader_hint': '目前支持的文件类型：{fileTypes}',
      },
      mindmapRenderer: {
        'download_svg': '下载SVG',
      },
      newWorkflowModal: {
        'create_new_workflow': '创建新工作流',
        'empty_workflow': '新建空工作流',
      },
      shareWorkflowModal: {
        'share_workflow': '分享工作流',
        'title': '标题',
        'brief': '描述',
        'brief_min_require': '描述至少{count}个字符',
        'brief_hint1': '介绍该工作流的用途、输入输出等信息，以便其他用户更好地了解该工作流。',
        'brief_hint2': '支持Markdown格式。',
        'share_to_community': '分享到社区',
        'share_to_community_brief': '分享到社区后，其他用户可以在社区中搜索到该工作流。否则仅可通过分享链接访问。',
        'share_success': '分享成功',
      },
      tagInput: {
        'select_tags': '选择标签',
      },
      workflowRunRecordsDrawer: {
        'workflows_run_records': '工作流运行记录',
        'my_workflows_run_records': '我的工作流运行记录',
        'start_time': '开始时间',
        'end_time': '结束时间',
        'used_credits': '消耗积分',
        'status': '状态',
        'status_not_started': '未开始',
        'status_queued': '排队中',
        'status_running': '运行中',
        'status_finished': '已完成',
        'status_failed': '运行失败',
        'check_record': '查看记录',
        'check_record_and_error_task': '查看记录及错误任务',
      },
    },
    codeEditorModal: {
      'title': '代码编辑器',
      'please_enter_code': '请输入代码，函数名固定为 main，输入参数与设定名称请一致。',
    },
    nodes: {
      baseNode: {
        'document_link': '文档链接',
      },
      baseField: {
        'show_in_use_interface': '是否在使用界面显示',
        'show': '显示',
        'hide': '隐藏',
      },
      listField: {
        'add_item': '添加项',
      },
      fileProcessing: {
        'title': '文件处理',
        FileLoader: {
          'title': '读取文件',
          'description': '读取文件内容。',
          'files': '文件',
          'output': '输出',
        },
      },
      textProcessing: {
        title: '文本处理',
        TemplateCompose: {
          'title': '文本合成',
          'description': '将多个变量合成为一段文字。',
          'template': '模板',
          'output': '输出',
          'add_field': '添加变量',
          'add_field_type': '输入类型',
          'field_type_input': '单行输入框',
          'field_type_textarea': '多行输入框',
          'add_field_display_name': '显示名称',
          'click_to_add_to_template': '点击可将变量添加到模板',
        },
        MarkdownToHtml: {
          'title': 'Markdown转HTML',
          'description': '将Markdown格式的文本转换为HTML格式。',
          'markdown': 'Markdown',
          'html': 'HTML',
        },
        TextSplitters: {
          'title': '文本分割',
          'description': '将文本按照指定的方法分割成多个文本。',
          'text': '文本',
          'split_method': '分割方法',
          'split_method_general': '通用分割',
          'split_method_delimiter': '分隔符分割',
          'delimiter': '分隔符',
          'chunk_length': '分割长度',
          'output': '输出',
        },
        ListRender: {
          'title': '列表渲染',
          'description': '将列表渲染成文本。',
          'list': '列表',
          'add_item': '添加项',
          'output_type': '输出类型',
          'output_type_text': '文本',
          'output_type_list': '列表',
          'output': '输出',
        },
        TextInOut: {
          'title': '文本输入输出',
          'description': '将输入的文本原样输出。用于多个地方需要同样的文本时。',
          'text': '文本',
          'output': '输出',
        },
      },
      llms: {
        title: 'AI模型',
        OpenAI: {
          'title': 'OpenAI',
          'description': 'OpenAI是一个非营利性的研究机构，致力于推动人工智能的安全发展。OpenAI的研究团队由世界顶级的人工智能专家组成，他们致力于开发人工智能技术，以解决人类面临的最重要的挑战。',
          'prompt': '输入内容（Prompt）',
          'llm_model': '模型',
          'temperature': 'AI偏好（温度）',
          'creative': '创意',
          'balanced': '平衡',
          'precise': '精准',
          'output': '输出',
        },
      },
      imageGeneration: {
        title: '图像生成',
        StableDiffusion: {
          'title': 'Stable Diffusion',
          'description': 'Stable Diffusion是2022年发布的深度学习文本到图像生成模型。',
          'prompt': '提示词',
          'negative_prompt': '负面提示词',
          'model': '模型',
          'cfg_scale': '提示遵循强度',
          'sampler': '采样器',
          'width': '宽度',
          'height': '高度',
          'output_type': '输出类型',
          'output_type_only_link': '仅路径',
          'output_type_markdown': 'Markdown',
          'output_type_html': 'HTML',
          'output': '输出',
        },
      },
      outputs: {
        title: '输出',
        Text: {
          'title': '文本呈现',
          'description': '用于在用户使用界面呈现文本。',
          'text': '文本内容',
          'output_title': '文本标题（用于在使用界面区分模块）',
          'render_markdown': '渲染Markdown',
          'output': '输出',
        },
        Email: {
          'title': '邮件',
          'description': '用于发送邮件。',
          'to_email': '收件人',
          'subject': '主题',
          'content_html': '内容（HTML）',
        },
        Document: {
          'title': '文档',
          'description': '用于生成文档文件。',
          'file_name': '文件名',
          'content': '内容（文本类建议输入Markdown格式内容）',
          'export_type': '文档类型',
          'output_type': '输出类型',
          'output_type_only_path': '仅生成文件路径',
          'output_type_markdown': 'Markdown',
          'output_type_html': 'HTML',
          'show_local_file': '显示本地文件',
          'output': '输出',
        },
        Audio: {
          'title': '音频',
          'description': '用于生成音频文件。',
          'content': '文字内容',
          'show_player': '显示播放器',
          'output_type': '输出类型',
          'output_type_only_link': '仅下载链接文字',
          'output_type_markdown': 'Markdown',
          'output_type_html': 'HTML',
          'output': '输出',
        },
        Mindmap: {
          'title': '思维导图',
          'description': '用于生成思维导图。',
          'content': 'Markdown内容',
          'show_mind_map': '显示思维导图',
          'output_type': '输出类型',
          'output': '输出',
        },
      },
      webCrawlers: {
        title: '网络爬虫',
        TextCrawler: {
          'title': '文本爬虫',
          'description': '用于爬取网页中的文本。',
          'url': '网址',
          'output_type': '输出类型',
          'text': '文本',
          'json': 'JSON',
          'use_oversea_crawler': '使用海外爬虫（速度较慢）',
          'output_text': '网页正文文本',
          'output_title': '网页标题',
        },
        BilibiliCrawler: {
          'title': 'Bilibili爬虫',
          'description': '用于爬取Bilibili视频信息。',
          'url_or_bvid': '视频网址或BVID',
          'output_type': '输出类型',
          'str': '文本',
          'list': '列表',
          'output_subtitle': '字幕',
          'output_title': '标题',
        },
        YoutubeCrawler: {
          'title': 'Youtube爬虫',
          'description': '用于爬取Youtube视频信息。',
          'url_or_video_id': '视频网址或视频ID',
          'output_type': '输出类型',
          'str': '文本',
          'list': '列表',
          'output_subtitle': '字幕',
          'output_title': '标题',
        },
      },
      triggers: {
        title: '触发器',
        ButtonTrigger: {
          'title': '按钮触发器',
          'description': '用于触发工作流运行，作为特殊节点，可以不需要与其它节点连接。',
          'button_text': '按钮文字',
          'run': '运行',
          'output': '输出',
        },
        ScheduleTrigger: {
          'title': '定时触发器',
          'description': '用于定时触发工作流运行。',
          'schedule': '定时',
          'schedule_settings': '定时设置',
          'save_schedule_settings': '保存定时设置',
          'output': '输出',
        },
      },
      vectorDb: {
        title: '向量数据库',
        AddData: {
          'title': '添加数据',
          'description': '用于向向量数据库中添加数据。',
          'text': '文本',
          'content_title': '标题',
          'source_url': '来源网址',
          'data_type': '数据类型',
          'database': '数据库',
          'split_method': '分割方法',
          'split_method_general': '通用分割',
          'chunk_length': '分割长度',
          'output': '输出',
          'object_id': '数据对象ID',
        },
        DeleteData: {
          'title': '删除数据',
          'description': '用于向向量数据库中删除数据。',
          'object_id': '数据对象ID',
          'database': '数据库',
          'delete_success': '删除成功',
        },
        Search: {
          'title': '搜索数据',
          'description': '用于搜索向量数据库中的数据。',
          'search_text': '搜索文本',
          'data_type': '数据类型',
          'database': '数据库',
          'count': '搜索结果数量',
          'output_type': '输出类型',
          'text': '文本',
          'list': '列表',
          'output': '输出',
        },
      },
      tools: {
        title: '工具',
        ProgrammingFunction: {
          'title': '编程函数',
          'description': '用于执行编程函数。',
          'language': '编程语言',
          'code': '代码',
          'open_editor': '打开代码编辑器',
          'add_parameter': '添加输入参数',
          'add_parameter_type': '参数类型',
          'parameter_type_str': '字符串',
          'parameter_type_int': '整数',
          'parameter_type_float': '浮点数',
          'parameter_type_bool': '布尔值',
          'parameter_type_list': '列表',
          'add_parameter_name': '参数名称',
          'output': '输出',
        },
        ImageSearch: {
          'title': '图片搜索',
          'description': '用于搜索图片。',
          'search_text': '搜索词',
          'search_engine': '搜索引擎',
          'search_engine_bing': 'Bing',
          'search_engine_pexels': 'Pexels',
          'count': '搜索结果数量',
          'output_type': '输出类型',
          'output_type_text': '文本',
          'output_type_markdown': 'Markdown',
          'output': '输出',
        },
      },
      controlFlows: {
        title: '控制流',
        Empty: {
          'title': '空节点',
          'description': '用于需要确保工作流顺序执行的情况。',
          'input': '输入',
          'output': '输出（不改变被连接节点的值）',
        },
        Conditional: {
          'title': '条件判断',
          'description': '用于根据条件判断执行不同的操作。',
          'field_type': '数据类型',
          'field_type_string': '字符串',
          'field_type_number': '数字',
          'left_field': '左侧数据',
          'right_field': '右侧数据',
          'operator': '条件判断运算符',
          'operator_equal': '等于',
          'operator_not_equal': '不等于',
          'operator_greater_than': '大于',
          'operator_less_than': '小于',
          'operator_greater_than_or_equal': '大于等于',
          'operator_less_than_or_equal': '小于等于',
          'operator_include': '左边包含右边',
          'operator_not_include': '左边不包含右边',
          'operator_is_empty': '为空',
          'operator_is_not_empty': '不为空',
          'operator_starts_with': '左边以右边开头',
          'operator_ends_with': '左边以右边结尾',
          'true_output': '满足条件时的输出',
          'false_output': '不满足条件时的输出',
          'output': '输出',
        },
        RandomChoice: {
          'title': '随机选择',
          'description': '用于从列表中随机选择一个元素。',
          'input': '输入',
          'output': '输出',
        },
      },
    },
  },
  layouts: {
    workspaceLayout: {
      tour: {
        'workflow_button_title': '切换工作流界面',
        'workflow_button_description': '点击此按钮可以切换到工作流界面。您的工作流以及官方模板等均可在此找到。',
        'database_button_title': '切换知识库/数据库界面',
        'database_button_description': '点击此按钮可以切换到数据界面。您可以在此创建您的个人知识库并上传您的数据以在工作流中使用。',
      },
    },
  },
}
