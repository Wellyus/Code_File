void search() {
	int i;
	char number[20];
	printf("\t\t请输入要查找的车牌号：");
	scanf("%s",number);
	for(i=0;i<n;i++) {
		if(strcmp(number,c[i].num)==0) {
			printf("\t\t第%d辆车车牌号为 %s , 进入时间为：%d月 %d日 %d时 %d分 , 离开时间为: %d日 %d时 %d分\n",i+1,c[i].num,c[i].month,c[i].day,c[i].inh,c[i].inm,c[i].outd,c[i].outh,c[i].outm);
			break;
		}
	}
	if(i>=n) {
		printf("\t\t车辆不存在！");
	}
}
