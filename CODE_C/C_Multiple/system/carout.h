void out() {
	int a=1,i=0;
	char number[20];
	do { 
		printf("\t\t请输入车牌号码: ");
		scanf("%s",number);
		for(i=0;i<n;i++) { 
			if(strcmp(number,c[i].num)==0) {
				printf("\t\t请输入离开时间：包括日、时、分");
				scanf("%d %d %d",&c[i].outd,&c[i].outh,&c[i].outm);
				break;
			}
		}
		if(i>=n) {
			printf("\t\t车辆信息不存在！\n");
		}
		printf("\t\t是否继续输入？输入0继续输入： ");
		scanf("%d",&a);
	} while(a==0);
}
