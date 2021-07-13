void merge(int nums1[],int m,int nums2[],int n)
{
    int pos = m+n-1;
    int i=m-1,j=n-1;
    while(1)
    {
        if(nums1[i]>=nums2[j]&&i>0)
        {
            nums1[pos] = nums1[m];
            --i;
            --pos;
        }
        if(nums1[i]<nums2[j]&&j>0)
        {
            nums1[pos] = nums2[j];
            --j;
            --pos;
        }
        if(i==0&&j==0)
        {
            break;
        }
    }
}