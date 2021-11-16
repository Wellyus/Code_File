void read() {
	FILE *fp;
	int i = 0;
	if ((fp = fopen("message.txt", "rb")) == NULL) {
		printf("cannot open file!\n");
		exit(1);
	}
	while (!feof(fp)) {
		if (fread(&c[i], sizeof(struct car), 1, fp) == 1) {
			i++;
		}
	}
	n = i;
}
