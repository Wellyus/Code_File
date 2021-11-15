void show() {
	FILE *fp;
	if((fp=fopen("message.txt","rb"))==NULL) {
		printf("cannot open file!\n");
		exit(1);
	}
	
	int i;
	printf("\t\t车辆信息如下：\n");
	for(i=0;i<n;i++) {
		printf("\t\t第%-3d辆车车牌号为 %s , 进入时间为：%2d月 %2d日 %2d时 %2d分 , 离开时间为: %2d日 %2d时 %2d分\n",i+1,c[i].num,c[i].month,c[i].day,c[i].inh,c[i].inm,c[i].outd,c[i].outh,c[i].outm);
	}
} 


