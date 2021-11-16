void del() {
	int i=0, j, k;
	int m;
	int flag=0;
	char number[20];
	printf("\t\tplease input car to delete: ");
	scanf("%s", number);
	
	for (i = 0; i < n; i++) { 
		if (strcmp(number, c[i].num) == 0) {
			printf("\t\tinput 0 to delete: ");
			scanf("%d", &m);
			if (m == 0) {
				j = i;
				if (j < n-1) {
					for (k = j; k < n-1; k++) {
						c[k] = c[k+1];
					}
				}
				n--;
				flag = 1;
				printf("\n\t\talready delete!");
			}
			break;
		}
	}
	if (flag == 0 && i >= n) {
		printf("\t\talready existed!"); 
	}
}
