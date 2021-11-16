void jifei() {
	int i;
	int flag = 0;
	int day,hour,minute; 
	float fee, danjia = 5.00;
	char number[20];
	printf("\t\tplease input car to fee");
	scanf("%s", number);
	for (i = 0; i < n; i++) {
		if (strcmp(number,c[i].num) == 0) {
			flag = 1;
			day = c[i].outd-c[i].day;
			hour = c[i].outh-c[i].inh+day*24;
			minute = c[i].outm-c[i].inm;
			if (minute < 0) {
				minute = minute+60;
				hour--;
			}
			if (minute > 30) {
				hour++;
			}
			printf("\t\there are cars:\n");
			printf("\t\tcar[%d] is %s , timein is %d month %d day %d hour %d minute , timeout is %d day %d hour %d minute\n", i+1, c[i].num, c[i].month, c[i].day, c[i].inh, c[i].inm, c[i].outd, c[i].outh, c[i].outm);

			if (hour <= 24) {
				fee = hour*danjia;
				printf("\t\thour is less than 24, total is %-4f rmb\n", fee);
				break; 
			} else if (hour > 24 && hour <= 72) {
				fee = hour*danjia*0.8;
				printf("\t\thour is between 24 and 72, total is %-4f\n", fee);
				break;
			} else {
				fee = hour*danjia*0.6;
				printf("\t\thour is greater than 71, total is %-4f\n", fee);
				break;
			}
		}

	}
	if (i >= n && flag == 0) {
		printf("\n\t\tcar not existed!\n");
	}
}
