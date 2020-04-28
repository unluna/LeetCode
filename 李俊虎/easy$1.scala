import scala.collection.mutable

/**
  * 题目:两数之和：
  * *
  * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
  * *
  * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
  * *
  * 示例:
  * *
  * 给定 nums = [2, 7, 11, 15], target = 9
  * *
  * 因为 nums[0] + nums[1] = 2 + 7 = 9
  * 所以返回 [0, 1]
  * *
  * 来源：力扣（LeetCode）
  * 链接：https://leetcode-cn.com/problems/two-sum
  * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  **/
object day1 {
  def main(args: Array[String]): Unit = {

    //测试样例
    val ints: Array[Int] = Array[Int](3, 3, 2)

    //预期结果[0,1]
    val ints1: Array[Int] = Solution.twoSum(ints, 5)

    //如果非空，则打印
    if (ints1 != null) {
      for (i <- ints1) {
        print(i)
      }
    }

  }
}

object Solution {
  def twoSum(nums: Array[Int], target: Int): Array[Int] = {

    //使用了hashMap来避开了可能使用同一个值的问题。
    val hashMap = new mutable.HashMap[Int, Int]
    //遍历数组的每一个元素a。
    for (index <- nums.indices) {

      //如果找到了这个与满足条件的互补数a，就返回
      if (hashMap.contains(nums(index))) {
        return Array[Int](index, hashMap.getOrElse(nums(index), -1))
      }
      //它记录的是互补数b的下标。
      hashMap.put(target - nums(index), index)
      println(s"放入了新的键值对:(${target - nums(index)}, $index),现在的长度:${hashMap.size}")
    }
    //不存在则返回null
    null
  }
}