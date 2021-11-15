void modify() {
	int i;
	char number[20];
	printf("\t\t请输入要修改的车牌号码： ");
	scanf("%s",number);
	for(i=0;i<n;i++) {
		if(strcmp(number,c[i].num)==0) {
			printf("\t\t请重新输入车牌号： ");
			scanf("%s",c[i].num);
			break;
		}
	}
	if(i>=n) {
		printf("\n\t\t车辆信息不存在！\n");
	}
}
