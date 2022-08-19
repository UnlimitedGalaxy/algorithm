{
	"id"
:
	"T1479", "name"
:
	"NC付款套件", "description"
:
	"内容随时变更，仅限开发使用", "processGroupId"
:
	14, "systemType"
:
	"OA", "starterType"
:
	0, "status"
:
	1, "templateVersion"
:
	"20200221013", "processFlowId"
:
	1561694568, "processFormConfig"
:
	{
		"showApplicantName"
	:
		1, "showApplicantOrg"
	:
		1, "showApplicantStation"
	:
		1, "showApplicantSex"
	:
		0, "showApplicantWorkType"
	:
		0, "componentItems"
	:
		[{
			"type": "radio",
			"props": {
				"id": "k6vxfqt77ctcsbe8hkn",
				"fieldId": "",
				"label": "财务组织",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "请选择内容",
				"required": 1,
				"inherited": 0,
				"inheritedCompId": "",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 3,
				"optionsCode": "",
				"options": [],
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}, {
			"type": "orgSelector",
			"props": {
				"id": "k6vxfqt7aspaayyrusa",
				"fieldId": "",
				"label": "费用归属部门",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "请选择内容",
				"required": 1,
				"inherited": 0,
				"inheritedCompId": "",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 0,
				"optionsCode": "",
				"options": null,
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": [],
				"orgClass": [],
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}, {
			"type": "radioSelect",
			"props": {
				"id": "k6vxfqt7f36aqjxzay",
				"fieldId": "",
				"label": "是否冲借支",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "请选择内容",
				"required": 1,
				"inherited": 0,
				"inheritedCompId": "",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 2,
				"optionsCode": "",
				"options": ["否", "是"],
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}, {
			"type": "moneyInput",
			"props": {
				"id": "k6vxfqt7ykjtplhu2a",
				"fieldId": "",
				"label": "借支总金额",
				"defaultValue": "",
				"value": null,
				"valueLength": 0,
				"placeholder": "请输入内容",
				"required": 1,
				"inherited": 0,
				"inheritedCompId": "",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 0,
				"optionsCode": "",
				"options": null,
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}, {
			"type": "detail",
			"props": {
				"id": "k6vxfqt76lez1oq1z9q",
				"fieldId": "",
				"label": "付款明细",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "",
				"required": 1,
				"inherited": 1,
				"inheritedCompId": "k6vxfqt7f36aqjxzay",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 0,
				"optionsCode": "",
				"options": null,
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 1
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": [{
				"type": "input",
				"props": {
					"id": "k6vxfqt7xmuwfjkrm5",
					"fieldId": "",
					"label": "付款摘要",
					"defaultValue": "",
					"value": null,
					"valueLength": 35,
					"placeholder": "请输入内容",
					"required": 0,
					"inherited": 0,
					"inheritedCompId": "",
					"multiple": 0,
					"hideInApproval": 0,
					"exactMinute": 0,
					"calculationHours": 0,
					"rangeLimit": 0,
					"rangeData": { "threshold": null, "rangeType": 0 },
					"optionsType": 0,
					"optionsCode": "",
					"options": null,
					"actionName": "",
					"scale": 0,
					"showPercent": 0,
					"formula": null,
					"startTime": 0,
					"endTime": 0,
					"orgType": null,
					"orgClass": null,
					"showTotal": 0
				},
				"extra": {
					"belong": "ncPay",
					"isSuiteMember": true,
					"parentId": "k6vxfqt76lez1oq1z9q",
					"suiteId": "k6vxfqt7bxd648t42s"
				},
				"children": []
			}, {
				"type": "input",
				"props": {
					"id": "k6vxfqt7vjmzb0gzz5",
					"fieldId": "",
					"label": "费用项目",
					"defaultValue": "",
					"value": null,
					"valueLength": 35,
					"placeholder": "请输入内容",
					"required": 0,
					"inherited": 0,
					"inheritedCompId": "",
					"multiple": 0,
					"hideInApproval": 0,
					"exactMinute": 0,
					"calculationHours": 0,
					"rangeLimit": 0,
					"rangeData": { "threshold": null, "rangeType": 0 },
					"optionsType": 0,
					"optionsCode": "",
					"options": null,
					"actionName": "",
					"scale": 0,
					"showPercent": 0,
					"formula": null,
					"startTime": 0,
					"endTime": 0,
					"orgType": null,
					"orgClass": null,
					"showTotal": 0
				},
				"extra": {
					"belong": "ncPay",
					"isSuiteMember": true,
					"parentId": "k6vxfqt76lez1oq1z9q",
					"suiteId": "k6vxfqt7bxd648t42s"
				},
				"children": []
			}, {
				"type": "moneyInput",
				"props": {
					"id": "k6vxfqt75a3pbu6634h",
					"fieldId": "",
					"label": "申报金额",
					"defaultValue": "",
					"value": null,
					"valueLength": 0,
					"placeholder": "请输入内容",
					"required": 0,
					"inherited": 0,
					"inheritedCompId": "",
					"multiple": 0,
					"hideInApproval": 0,
					"exactMinute": 0,
					"calculationHours": 0,
					"rangeLimit": 0,
					"rangeData": { "threshold": null, "rangeType": 0 },
					"optionsType": 0,
					"optionsCode": "",
					"options": null,
					"actionName": "",
					"scale": 2,
					"showPercent": 0,
					"formula": null,
					"startTime": 0,
					"endTime": 0,
					"orgType": null,
					"orgClass": null,
					"showTotal": 0
				},
				"extra": {
					"belong": "ncPay",
					"isSuiteMember": true,
					"parentId": "k6vxfqt76lez1oq1z9q",
					"suiteId": "k6vxfqt7bxd648t42s"
				},
				"children": []
			}, {
				"type": "moneyInput",
				"props": {
					"id": "k6vxfqt7i1ynyju5ajs",
					"fieldId": "",
					"label": "冲借支金额",
					"defaultValue": "",
					"value": null,
					"valueLength": 0,
					"placeholder": "请输入内容",
					"required": 0,
					"inherited": 0,
					"inheritedCompId": "",
					"multiple": 0,
					"hideInApproval": 0,
					"exactMinute": 0,
					"calculationHours": 0,
					"rangeLimit": 0,
					"rangeData": { "threshold": null, "rangeType": 0 },
					"optionsType": 0,
					"optionsCode": "",
					"options": null,
					"actionName": "",
					"scale": 2,
					"showPercent": 0,
					"formula": null,
					"startTime": 0,
					"endTime": 0,
					"orgType": null,
					"orgClass": null,
					"showTotal": 0
				},
				"extra": {
					"belong": "ncPay",
					"isSuiteMember": true,
					"parentId": "k6vxfqt76lez1oq1z9q",
					"suiteId": "k6vxfqt7bxd648t42s"
				},
				"children": []
			}, {
				"type": "moneyInput",
				"props": {
					"id": "k6vxfqt77jmctpmohiv",
					"fieldId": "",
					"label": "核准金额",
					"defaultValue": "",
					"value": null,
					"valueLength": 0,
					"placeholder": "请输入内容",
					"required": 0,
					"inherited": 1,
					"inheritedCompId": "k6vxfqt75a3pbu6634h",
					"multiple": 0,
					"hideInApproval": 0,
					"exactMinute": 0,
					"calculationHours": 0,
					"rangeLimit": 0,
					"rangeData": { "threshold": null, "rangeType": 0 },
					"optionsType": 0,
					"optionsCode": "",
					"options": null,
					"actionName": "",
					"scale": 2,
					"showPercent": 0,
					"formula": null,
					"startTime": 0,
					"endTime": 0,
					"orgType": null,
					"orgClass": null,
					"showTotal": 0
				},
				"extra": {
					"belong": "ncPay",
					"isSuiteMember": true,
					"parentId": "k6vxfqt76lez1oq1z9q",
					"suiteId": "k6vxfqt7bxd648t42s"
				},
				"children": []
			}, {
				"type": "formulaInput",
				"props": {
					"id": "k6vxfqt7f2lby6stwh9",
					"fieldId": "",
					"label": "付款金额",
					"defaultValue": null,
					"value": null,
					"valueLength": 0,
					"placeholder": "请输入内容",
					"required": 0,
					"inherited": 0,
					"inheritedCompId": "",
					"multiple": 0,
					"hideInApproval": 0,
					"exactMinute": 0,
					"calculationHours": 0,
					"rangeLimit": 0,
					"rangeData": { "threshold": null, "rangeType": 0 },
					"optionsType": 0,
					"optionsCode": "",
					"options": null,
					"actionName": "",
					"scale": 2,
					"showPercent": 0,
					"formula": [{ "id": "k6vxfqt77jmctpmohiv" }, "-", { "id": "k6vxfqt7i1ynyju5ajs" }],
					"startTime": 0,
					"endTime": 0,
					"orgType": null,
					"orgClass": null,
					"showTotal": 0
				},
				"extra": {
					"belong": "ncPay",
					"isSuiteMember": true,
					"parentId": "k6vxfqt76lez1oq1z9q",
					"suiteId": "k6vxfqt7bxd648t42s"
				},
				"children": []
			}]
		}, {
			"type": "bankCardSelector",
			"props": {
				"id": "k6vxfqt7p258l0910qk",
				"fieldId": "",
				"label": "收款账户",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "请选择内容",
				"required": 1,
				"inherited": 0,
				"inheritedCompId": "",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 0,
				"optionsCode": "",
				"options": null,
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}, {
			"type": "radio",
			"props": {
				"id": "k6vxfqt74ee6vc1ejps",
				"fieldId": "",
				"label": "付款交易类型",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "请选择内容",
				"required": 1,
				"inherited": 0,
				"inheritedCompId": "",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 2,
				"optionsCode": "",
				"options": ["采购付款", "集团内付款", "员工付款", "销售退款", "其他"],
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}, {
			"type": "radio",
			"props": {
				"id": "k6vxfqt7sgput73tc6",
				"fieldId": "",
				"label": "交易对象类型",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "请选择内容",
				"required": 1,
				"inherited": 0,
				"inheritedCompId": "",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 2,
				"optionsCode": "",
				"options": ["客户", "供应商", "人员"],
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}, {
			"type": "radio",
			"props": {
				"id": "k6vxfqt7w6a018q2ovp",
				"fieldId": "",
				"label": "出款类型",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "请选择内容",
				"required": 1,
				"inherited": 0,
				"inheritedCompId": "",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 2,
				"optionsCode": "",
				"options": ["A类", "B类"],
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}, {
			"type": "radioSelect",
			"props": {
				"id": "k6vxfqt7nvld4lxz63i",
				"fieldId": "",
				"label": "生成NC付款单",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "请选择内容",
				"required": 1,
				"inherited": 0,
				"inheritedCompId": "",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 2,
				"optionsCode": "",
				"options": ["生成", "不生成"],
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}, {
			"type": "paymentReceipt",
			"props": {
				"id": "k6vxfqt7pow3a4owz6",
				"fieldId": "",
				"label": "NC付款单",
				"defaultValue": null,
				"value": null,
				"valueLength": 0,
				"placeholder": "",
				"required": 0,
				"inherited": 1,
				"inheritedCompId": "k6vxfqt7nvld4lxz63i",
				"multiple": 0,
				"hideInApproval": 0,
				"exactMinute": 0,
				"calculationHours": 0,
				"rangeLimit": 0,
				"rangeData": { "threshold": null, "rangeType": 0 },
				"optionsType": 0,
				"optionsCode": "",
				"options": null,
				"actionName": "",
				"scale": 0,
				"showPercent": 0,
				"formula": null,
				"startTime": 0,
				"endTime": 0,
				"orgType": null,
				"orgClass": null,
				"showTotal": 0
			},
			"extra": { "belong": "ncPay", "isSuiteMember": true, "suiteId": "k6vxfqt7bxd648t42s" },
			"children": []
		}]
	}
,
	"processFormId"
:
	5649, "formTemplateId"
:
	0, "formTemplateVersion"
:
	0, "printConfig"
:
	{
		"isPrintable"
	:
		0, "paperSize"
	:
		1, "paperDirection"
	:
		1, "printRows"
	:
		[], "approvalHistory"
	:
		0
	}
,
	"attachmentList"
:
	[], "nodePermission"
:
	{
		"applicantInfoPermission"
	:
		{
			"applicantOrgPermission"
		:
			2, "applicantStationPermission"
		:
			2, "applicantSexPermission"
		:
			2, "applicantWorkTypePermission"
		:
			2
		}
	,
		"componentPermissionConf"
	:
		[{
			"componentId": "k6vxfqt77ctcsbe8hkn",
			"fieldId": "k6vxfqt77ctcsbe8hkn",
			"operateType": 3
		}, {
			"componentId": "k6vxfqt7aspaayyrusa",
			"fieldId": "k6vxfqt7aspaayyrusa",
			"operateType": 3
		}, {
			"componentId": "k6vxfqt7f36aqjxzay",
			"fieldId": "k6vxfqt7f36aqjxzay",
			"operateType": 3
		}, {
			"componentId": "k6vxfqt7ykjtplhu2a",
			"fieldId": "k6vxfqt7ykjtplhu2a",
			"operateType": 3
		}, {
			"componentId": "k6vxfqt76lez1oq1z9q",
			"fieldId": "k6vxfqt76lez1oq1z9q",
			"operateType": 3
		}, {
			"componentId": "k6vxfqt7p258l0910qk",
			"fieldId": "k6vxfqt7p258l0910qk",
			"operateType": 3
		}, {
			"componentId": "k6vxfqt74ee6vc1ejps",
			"fieldId": "k6vxfqt74ee6vc1ejps",
			"operateType": 3
		}, {
			"componentId": "k6vxfqt7sgput73tc6",
			"fieldId": "k6vxfqt7sgput73tc6",
			"operateType": 3
		}, {
			"componentId": "k6vxfqt7w6a018q2ovp",
			"fieldId": "k6vxfqt7w6a018q2ovp",
			"operateType": 3
		}, {
			"componentId": "k6vxfqt7nvld4lxz63i",
			"fieldId": "k6vxfqt7nvld4lxz63i",
			"operateType": 3
		}, { "componentId": "k6vxfqt7pow3a4owz6", "fieldId": "k6vxfqt7pow3a4owz6", "operateType": 3 }], "canAddApproval"
	:
		0, "extraCompList"
	:
		[]
	}
}
