void jifei() {
	int i;
	int flag=0;
	int day,hour,minute; 
	float fee,danjia=5.00;
	char number[20];
	printf("\t\t请输入要查找的车牌号：");
	scanf("%s",number);
	for(i=0;i<n;i++) {
		if(strcmp(number,c[i].num)==0) {
			flag=1;
			day=c[i].outd-c[i].day;
			hour=c[i].outh-c[i].inh+day*24;
			minute=c[i].outm-c[i].inm;
			if(minute<0) {
				minute=minute+60;
				hour--;
			}
			if(minute>30) {
				hour++;
			}
			printf("\t\t车辆信息如下：\n");
			printf("\t\t第%d辆车车牌号为 %s , 进入时间为：%d月 %d日 %d时 %d分 , 离开时间为: %d日 %d时 %d分\n",i+1,c[i].num,c[i].month,c[i].day,c[i].inh,c[i].inm,c[i].outd,c[i].outh,c[i].outm);
			if(hour<=24) {
				fee=hour*danjia;
				printf("\t\t此次停车时间在24小时以内，共消费：%-4f元 。欢迎您的下次光临！\n",fee);
				break; 
			} else if(hour>24&&hour<=72) {
				fee=hour*danjia*0.8;
				printf("\t\t此次停车时间在24到72小时之间，停车时间较长！共消费：%-4f元 。欢迎您的下次光临！\n",fee);
				break;
			} else {
				fee=hour*danjia*0.6;
				printf("\t\t此次停车时间在72小时以上，占用停车位时间过长，共消费：%-4f元 。希望您下次缩短停车时间，谢谢您的配合！！\n",fee);
				break;
			}
		}
	}
	if(i>=n && flag==0) {
		printf("\n\t\t车辆信息不存在！\n");
	}
}
