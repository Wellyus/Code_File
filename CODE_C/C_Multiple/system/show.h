void show() {
	FILE *fp;
	if((fp=fopen("message.txt","rb"))==NULL) {
		printf("cannot open file!\n");
		exit(1);
	}
	
	int i;
	printf("\t\t������Ϣ���£�\n");
	for(i=0;i<n;i++) {
		printf("\t\t��%-3d�������ƺ�Ϊ %s , ����ʱ��Ϊ��%2d�� %2d�� %2dʱ %2d�� , �뿪ʱ��Ϊ: %2d�� %2dʱ %2d��\n",i+1,c[i].num,c[i].month,c[i].day,c[i].inh,c[i].inm,c[i].outd,c[i].outh,c[i].outm);
	}
} 


